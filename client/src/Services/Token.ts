import Cookies from 'universal-cookie';
import {Requests} from '.';

export default class Token{
    
    public static save(token:any):void{
        let a = new Date();
        a.setMinutes(a.getMinutes() + 30);

        const cookies = new Cookies();
        cookies.set('token',token,{
            expires: a,
            maxAge : 1800,
        })
    }

    public static update():void{
        const cookies = new Cookies();

        const token = cookies.get('token');
        this.save(token);
    }

    public static remove():void{
        const cookies = new Cookies();
        cookies.remove('token');
    }

    public static get():any{
        this.update();
        return new Cookies().get('token');
    }

    public static exist():any{
        const cookies = new Cookies();
        const token = cookies.get('token');

        if(token === undefined || token === null || token === ''){
            return false;
        }

        return true;
    }

    /**
     * Check token's validity and refreshes if invalid
     * 
     * @returns bool
     */

    public static async valid(){

        if(Token.exist()){ 
            const a:any = await Requests.check();

            if(a.network_error || a.status !== 200 ){
                this.remove();
                return false;
            }else{
                this.update();
                return true;
            }

        }
        return false;
    }

}