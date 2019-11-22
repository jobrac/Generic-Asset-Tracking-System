import React, { useEffect } from 'react';
import {Token} from 'Services';
import { Redirect } from 'react-router-dom';

const ComponentMiddleware =(props:any) =>{

    const [ finish, setFinish ] = React.useState(false);
    const [ token, setToken ] = React.useState(false);


    useEffect(()=>{
        check();
    },[]);

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