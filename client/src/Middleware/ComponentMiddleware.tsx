import React from 'react';
import {Token,Requests} from 'Services';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {UserAccount,LoggedIn} from 'Redux/Actions';
import {useSelector,useDispatch} from 'react-redux';

const ComponentMiddleware =(props:any) =>{

    const [ initialized, setInitialized ] = React.useState(false);
    const user:any = React.useRef();
    const dispatch = useDispatch();
    const route = useSelector((state:any) => state.Route);
    const status = useSelector((state:any) => state.Stat);

    React.useEffect(()=>{
        check();
    },[Token.exist()]);

    const check = async () =>{
        if(Token.exist()){
            const token:any = jwt_decode(Token.get());
            const useraccount = await user.current.get({id:token.sub});
            
            if(useraccount.network_error){
                Token.remove();
            }else{

                if(useraccount.status === 200){
                    dispatch(UserAccount(useraccount.data,route));
                    dispatch(LoggedIn(true));
                    // setInitialized(true);
                }else{
                    Token.remove();
                    // setInitialized(true);
                }
            }
        }else{
            dispatch(LoggedIn(false));
        }
        setInitialized(true);
    }

    if(!initialized){
        return <Requests.User request={user} />
    }

    if(Token.exist()){
        return <props.component {...props}  />;
    }
    
    return <Redirect to={{pathname:'/login', state: { from : props.location.pathname}}} />;
}

export default ComponentMiddleware;