import axios from 'axios';
import Url from 'Services/ServerUrl';
import { Token } from 'Services';

export interface Format{
    network_error : boolean,
    status        : number,
    data          : any,
}

export class StaticMethods{
    
    public static async delay(ms:number){
        return new Promise( resolve => setTimeout(resolve, ms) );
    }


    static header(token?:any){

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

    

    public static async refresh(){

        const header = this.header(Token.get());

        let format:Format = {
            network_error : false,
            status : 0,
            data : '',
        }

        await axios({
            method  :   "POST",
            url     :   Url.refresh,
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            if(error.response){
                format.status = error.response.status;
                format.data = error.response.data;
            }else{
                format.network_error = true;
            }
            
        })
        return format;

    }
}