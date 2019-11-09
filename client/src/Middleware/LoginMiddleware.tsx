import React, { useEffect } from 'react';
import { Redirect} from 'react-router'
import {Token} from 'Services';

const LoginMiddleware=(props:any) => {

    
    const [ finish, setFinish ] = React.useState(false);
    const [ token, setToken ] = React.useState(false);
    
    async function check(){
        if (Token.exist()){
            setToken(true);
        }
        setFinish(true);
    }
    
    useEffect(() => {
        check();
    },[]);

    if(!finish){
        return null;
    }

    
    if(token){
        return <Redirect to={{ pathname : '/'}} />;
    }

    return <props.component {...props} />;
}

export default LoginMiddleware;