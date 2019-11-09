import {StaticMethods, Format} from './StaticMethods';
import Token from "../Token";
import Url from '../ServerUrl';
import axios from 'axios';


interface Show{
    deleted         : boolean,
    department_id   : number,
    company_id      : number,
    group_id        : number,
    order           : string,
    sort            : string,
    offset          : number,
    limit           : number,
    search          : string,
}



interface Update{
    id              : number,
    first_name      ?: string,
    last_name       ?: string,
    username        ?: string,
    password        ?: string,
    password_confirmation ?: string,
    email           ?: string,
    permissions     ?: string,
    activated       ?: string,
    phone           ?: string,
    jobtitle        ?: string,
    manager_id      ?: number,
    employee_num    ?: string,
    notes           ?: string,
    company_id      ?: number,
    two_factor_enrolled ?: boolean,
    two_factor_optin    ?: boolean,
    department_id   ?: number, 
}

interface Create extends Update{
    id              : never,
    first_name      : string,
    username        : string,
    password        : string,
    password_confirmation : string,
}

class User extends StaticMethods{

    static async show(user?:Show){
    }

    static async get(id:number){
        
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "GET",
            url     :   Url.user+id,
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.get,id);
        });

        return format;
    }

    static async update(user:Update){

    }

    static async patch(user:Update){

    }

    static async add(user:Create){
        
    }

    static async delete(id:number){

    }


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

export default User;