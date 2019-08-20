import React, { useEffect } from 'react';
import {Token, Requests} from 'Services';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // for connecting redux;
import { UserAccount as User } from 'Redux/Actions';
import jwt_decode from 'jwt-decode';

const ComponentMiddleware =(props:any) =>{

    const [ finish, setFinish ] = React.useState(false);
    const [ token, setToken ] = React.useState(false);
    const updateUser = useDispatch();
    
    useEffect(()=>{
        async function check(){
            if(await Token.valid()){
    
                const id:any = jwt_decode(Token.get());
                const user:Requests.Format = await Requests.User.get(id.sub);
                if(user.status === 200){
                    updateUser(User(user.data));
    
                    setToken(true);
                }
            }
            setFinish(true);
        }

        check();

    },[updateUser]);

   
    
    if(!finish){
        return null;
    }

    if(token){
        return <props.component {...props}  />;
        // return null;
    }
    
    return <Redirect to={{pathname:'/login', state: { from : props.location.pathname}}} />;
}



export default ComponentMiddleware;