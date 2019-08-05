import Cookies from 'universal-cookie';

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

    public static exist():any{
        const cookies = new Cookies();
        const token = cookies.get('token');

        if(token === undefined || token === null || token === ''){
            return false;
        }

        return true;
    }


   

}