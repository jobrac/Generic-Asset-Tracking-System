import {StaticMethods, Format} from './StaticMethods';
import Token from "../Token";
import Url from '../ServerUrl';
import axios from 'axios';
import {Get,Show,Create} from 'Types/Requests/Components';

class Components extends StaticMethods{

    static async show(data?:Show){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "GET",
            url     :   Url.components,
            headers :   header,
            data    :   data,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.show,data);
        });

        return format;
    }

    static async get(data:Get){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "GET",
            url     :   Url.components+data.id,
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.get,data);
        });

        return format;
    }

    static async add(data:Create){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "POST",
            url     :   Url.components,
            headers :   header,
            data    :   data
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.add,data);
        });

        return format;
    }





    /**
     * Callback for token error
     * 
     */
    public static async Error(error:any,callback:Function,params?:any){

        let format:Format = {
            network_error : false,
            status : 0,
            data : '',
        }

        if(!error.response){
            format.network_error = true;
            return format;
        }

        if(error.response.status === 401){
            if(!Token.exist()){
                return format;
            }

            let a = await this.refresh();
            
            if(a.network_error){
                format.network_error = true;
                return format;
            }

            if(a.status === 200){                
                Token.save(a.data.token);

                if(params === null ){
                    console.log('called without parameter');
                    return callback();
                }
                console.log('called with parameter of '+params);
                return callback(params);
            }
        }

        return {
            network_error : false,
            status        : error.response.status,
            data          : error.response.data,
        }
    }

}

export default Components;