import {StaticMethods, Format} from './StaticMethods';
import Token from "../Token";
import Url from '../ServerUrl';
import axios from 'axios';
import {Get,Show,Create,Update, Accessories,Asset,Patch,Delete} from 'Types/Requests/User';

class User extends StaticMethods{

    static async show(user?:Show){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "GET",
            url     :   Url.user,
            headers :   header,
            params    :   user,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.show,user);
        });

        return format;
    }

    static async get(user:Get){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "GET",
            url     :   Url.user+user.id,
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.get,user);
        });

        return format;
    }

    static async update(user:Update){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "PUT",
            url     :   Url.user+user.id,
            headers :   header,
            params    :   user
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.update,user);
        });

        return format;
    }

    static async patch(user:Patch){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "PATCH",
            url     :   Url.user+user.id,
            headers :   header,
            params    :   user
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.patch,user);
        });

        return format;
    }

    static async add(user:Create){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "POST",
            url     :   Url.user,
            headers :   header,
            params    :   user
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.add,user);
        });

        return format;
    }

    static async assets(user:Asset){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "GET",
            url     :   Url.user+user.id+'/assets',
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.assets,user);
        });

        return format;
    }

    static async accessories(user:Accessories){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "GET",
            url     :   Url.user+user.id+'/accessories',
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.accessories,user);
        });
        
        return format;
    }

    static async delete(user:Delete){
        let format:Format = {
            network_error : false,
            status        : 0,
            data          : '',
        }

        const header = super.header(Token.get());    

        await axios({
            method  :   "delete",
            url     :   Url.user+user.id,
            headers :   header,
        }).then( response => {
            format.status = response.status;
            format.data = response.data;
        }).catch( async (error) =>{
            format = await this.Error(error,this.delete,user);
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

export default User;