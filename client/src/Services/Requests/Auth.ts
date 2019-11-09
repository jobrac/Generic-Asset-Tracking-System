import {StaticMethods, Format} from './StaticMethods';
import axios from 'axios';
import Url from '../ServerUrl';

interface credential{
    username : string,
    password : string,
}

class Auth extends StaticMethods{

    public static async login(credential:credential){

        let format:Format = {
            network_error : false,
            status : 0,
            data : '',
        }
        
        await axios({
            method  :   "POST",
            url     :   Url.login,
            headers :   this.header(),
            data    :   {
                username : credential.username,
                password : credential.password,
            }
        }).then( response => {
            format = {
                network_error : false,
                status        : response.status,
                data          : response.data,
            }
        }).catch( async (error) =>{
            if(error.response){
                format = {
                    network_error : false,
                    status        : error.response.status,
                    data          : error.response.data,
                }
            }else{
                format.network_error = true;
            }
        })

        return format;
    }
}

export default Auth;