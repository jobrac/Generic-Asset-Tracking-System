import {StaticMethods, Format} from './StaticMethods';
import axios from 'axios';
import Url from '../ServerUrl';
import {Token} from 'Services';

let format:Format = {
    network_error : false,
    status : 0,
    data : '',
}

class Auth extends StaticMethods{

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
            format = {
                network_error : false,
                status        : response.status,
                data          : response.data,
            }
        }).catch( async (error) =>{
            format = await this.handle_error({
                response : error.response,
                format : format,
                callback : this.login,
                params : a,
            });

        })

        return format;
    }

    public static async refresh(){

        const header = this.header(Token.get());

        await axios({
            method  :   "POST",
            url     :   Url.refresh,
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.handle_error({
                response : error.response,
                format : format,
                callback : this.login,
                auth    : true,
            });
        })
        return format;

    }

    public static async check(){
        if(!Token.exist()){
            format.status = 401;
            format.data = 'nothing';
            return format;
        }

        const header = this.header(Token.get());

        await axios({
            method  :   "POST",
            url     :   Url.check,
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.handle_error({
                response : error.response,
                format : format,
                callback : this.check,
                auth    : true,
            });
        })
        return format;
    }

}

export default Auth;