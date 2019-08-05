import axios from 'axios';
import Url from './ServerUrl';

class Requests{
    
    static format = {
        status : 0,
        data : '',
    }

    public static async Login(a:any){
        await axios({
            method  :   "POST",
            url     :   Url.login,
            headers :   this.header(),
            data    :   {
                username : a.username,
                password : a.password,
            }
        }).then( response => {
            this.format.status = response.status;
            this.format.data = response.data;
        }).catch( error =>{
            this.format.status = error.response.status;
            this.format.data = error.response.data;
        })
        return this.format;
    }

    private static header(token?:any){

        if(token === null || token === undefined){
            return {
                'Content-Type' : 'application/json',
                'Accept'       :  'application/json',
            };
        }
        
        return {
            'Content-Type' :    'application/json',
            'Accept'       :    'application/json',
            'token'        :    token
        };
    }

}

export default Requests;