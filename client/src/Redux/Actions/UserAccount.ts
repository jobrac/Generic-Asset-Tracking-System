import { UserAccount as UA, Route } from './Types';
import { useSelector, useDispatch } from 'react-redux';

export const UserAccount = (a:any,route:any) => {     
    return (dispatch:any) => {

        
        let routes = route.list;
        Object.keys(a.permissions).forEach( (value:any) =>{
            if(value !== 'superuser' && value !== 'admin'){
                if(a.permissions[value].view === 0){
                    routes.splice(routes.findIndex(({name}:any) => name === value),1);
                }
            }
        });


        // dont forget this
        console.error("Process Sidebar Navigations based from route list in USERACCOUNT actions REDUX");

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
