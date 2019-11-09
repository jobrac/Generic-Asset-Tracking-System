import React, { useEffect } from 'react';
import {Token/*, Requests*/} from 'Services';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // for connecting redux;
// import { UserAccount as User } from 'Redux/Actions';
// import jwt_decode from 'jwt-decode';

const ComponentMiddleware =(props:any) =>{

    const [ finish, setFinish ] = React.useState(false);
    const [ token, setToken ] = React.useState(false);
    const updateUser = useDispatch();


    useEffect(()=>{
        check();
    },[updateUser]);

    const check = () =>{
        if(Token.exist()){
            setToken(true);
        }
        setFinish(true);
    }
    if(!finish){
        return null;
    }

    if(token){
        return <props.component {...props}  />;
    }
    
    return <Redirect to={{pathname:'/login', state: { from : props.location.pathname}}} />;
}



export default ComponentMiddleware;