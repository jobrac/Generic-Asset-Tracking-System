import Token from "../Token";

export interface Format{
    network_error : boolean,
    status        : number,
    data          : any,
}

export class StaticMethods{
    static async handle_error(b:any){
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


    static async retry(callback:Function,params:any){
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


    static async delay(ms:number){
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
}