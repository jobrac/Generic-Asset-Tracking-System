import { UserAccount as UA, Route } from './Types';
import { useSelector, useDispatch } from 'react-redux';

export const UserAccount = (a:any,route:any) => {     
    return (dispatch:any) => {

        
        let routes = route.list;
        console.log(route.list);
        Object.keys(a.permissions).forEach( (value:any) =>{
            if(value !== 'superuser' && value !== 'admin'){
                if(a.permissions[value].view === 0){
                    routes.splice(routes.findIndex(({name}:any) => name === value),1);
                }
            }
        });

        
        let nav = route.nav;


        dispatch({
            type    : Route,
            payload : routes,
        })
        


        dispatch({
            type    : UA,
            payload : a
        });
    }
}
