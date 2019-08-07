import axios from 'axios';
import Url from './ServerUrl';
import {Token} from '.';

/**
 * 
 * params should always in JSON format for the callback issues
 * 
 */


class Requests{
    
    static format = {
        network_error : false,
        status : 0,
        data : '',
    }

    public static async login(a:any){
        
        await axios({
            method  :   "POST",
            url     :   Url.login,
            headers :   this.header(),
            data    :   {
                username : a.username,
                password : a.password,
            }
        }).then( response => {
            this.format = {
                network_error : false,
                status        : response.status,
                data          : response.data,
            }
        }).catch( async (error) =>{
            this.format = await this.handle_error({
                response : error.response,
                format : this.format,
                callback : this.login,
                params : a,
            });

        })

        return this.format;
    }

    public static async refresh(){

        const header = this.header(Token.get());

        await axios({
            method  :   "POST",
            url     :   Url.refresh,
            headers :   header,
        }).then( response => {
            this.format.status = response.status;
            this.format.data = response.data;
        }).catch( async (error) =>{
            this.format = await this.handle_error({
                response : error.response,
                format : this.format,
                callback : this.login,
                auth    : true,
            });
        })
        return this.format;

    }

    public static async check(){
        
        const header = this.header(Token.get());

        await axios({
            method  :   "POST",
            url     :   Url.check,
            headers :   header,
        }).then( response => {
            this.format.status = response.status;
            this.format.data = response.data;
        }).catch( async (error) =>{
            this.format = await this.handle_error({
                response : error.response,
                format : this.format,
                callback : this.check,
                auth    : true,
            });
        })
        return this.format;

    }










    /**
     * 
     * Private functions
     *
     * @param { response : '',format   : '',callback : '',params   : '',auth     : false}
     */


    private static async handle_error(b:any){
        const format = b.format;

        //if network error
        if(b.response === undefined){
           format.network_error = true;
           return format;
        }
        
        //refresh token if expired, skip if token is invalid
        if( b.auth !== undefined && b.auth === true && b.response.status === 401 ){

            if(Token.valid()){
                if(b.params === undefined || b.params === null){
                    return this.retry(b.callback,undefined);
                }

                return this.retry(b.callback,b.params);
            }
        }

        //if too many request
        if(b.response.status === 429){
            let a:any = localStorage.getItem(Token.get());
            
            if(a !== null || a!== undefined){
                a =0;
            }

            if( parseInt(a) <= 3){
                return this.retry(b.callback,b.params);
            }
        }
        
        //return this if above condition doesn't met and if token is invalid
        format.status = b.response.status;
        format.data   = b.response.data;
        return format;
    }


    private static async retry(callback:Function,params:any){
        if(localStorage.getItem(Token.get()) === null || localStorage.getItem(Token.get()) === undefined ){
            localStorage.setItem(Token.get(),String(0));
        }else{
            let a:any = localStorage.getItem(Token.get());
            let counter = parseInt(a);
            localStorage.setItem(Token.get(),String(counter+1));
        }

        await this.delay(1000);

        if(params === undefined){
            return callback();
        }

        return callback(params);
    }


    private static async delay(ms:number){
        return new Promise( resolve => setTimeout(resolve, ms) );
    }


    private static header(token?:any){

        if(token === null || token === undefined){
            return {
                'Content-Type' : 'application/json',
                'Accept'       :  'application/json',
            };
        }
        
        return {
            'Content-Type'         :    'application/json',
            'Accept'               :    'application/json',
            'Authorization'        :    'Bearer '+token
        };
    }


}

export default Requests;