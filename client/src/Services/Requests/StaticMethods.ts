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


interface request{
    url     :   string,
    header  ?:   any,
    data    ?:   {},
    params  :   boolean,
    method  :   'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}


export const request = async(data:request) =>{


    let header = {};
    let format:Format = {
        network_error : false,
        status        : 0,
        data          : '',
    }

    if(data.header !== undefined){
        header = data.header;
    }else{
        header = {
            'Content-Type'  :   'application/json',
            'Accept'        :   'application/json',
            'Authorization' :   'Bearer '+Token.get(),
        }
    }

    await axios({
        method  :   data.method,
        url     :   data.url,
        headers :   header,
        params  :   data.params ? data.data : '',
    }).then( response => {
        format.status = response.status;
        format.data = response.data;
    }).catch( async (error) =>{
        format = await handleError(error,data);
    });
    
    return format;

}


const handleError = async (error:any,request:request) =>{
    
    let format:Format = {
        network_error : false,
        status        : 0,
        data          : '',
    }

    if(!error.response){
        format.network_error = true;
        return format;
    }


    const recall = async() => {
        let header = {};   
        if(header || header !== null || header !== undefined){
            header = request.header;
        }else{
            header = {
                'Content-Type'  :   'application/json',
                'Accept'        :   'application/json',
                'Authorization' :   'Bearer '+Token.get(),
            }
        }

        await axios({
            method  :   request.method,
            url     :   request.url,
            headers :   request.header,
            params  :   request.params ? request.data : '',
        }).then( response => {
            return {
                success : true,
                response: response
            };
        }).catch( error =>{
            return {
                success : false,
                response: error,
            };
        });
    }

    const refresh = async () =>{
        await axios({
            method  :   "POST",
            url     :   Url.refresh,
            headers :   {
                'Content-Type'  :   'application/json',
                'Accept'        :   'application/json',
                'Authorization' :   'Bearer '+Token.get(),
            },
        }).then( response => {
            return {
                success:true,
                response :response,
            }
        }).catch( error =>{
            return {
                success:false,
                response :error,
            }
        })
    }


    switch(error.response.status){
        case 429:
            let counter = 0;
            while(counter<3){
                let a:any;
                setTimeout(async () => {
                    a = await recall();
                    if(a.success){
                        format.status = a.response.status;
                        format.data = a.response.data;
                        return format;
                    }else{
                        if(a.response && a.response.response.status === 429)
                            counter = counter + 1;
                        else{
                            format.network_error = false;
                            return format;
                        }
                    }
                }, 5000);
            }
            format.network_error = false;
            return format;
        case 401:
            let a:any = await refresh();
            if(a.success){
                Token.save(a.response.data.token);

                let b:any = await recall();
                if(b.success){
                    format.status = a.response.status;
                    format.data = a.response.data;
                    return format;
                }else{
                    format.network_error = false;
                    return format;
                }
            }else{
                format.network_error = false;
                return format;
            }
        default : 
            format.network_error = false;
            return format;
    }
}
