import React from 'react';
import {BrowserRouter,Route,Switch, withRouter} from 'react-router-dom';
import * as Component from 'Components';
import {useSelector,useDispatch} from 'react-redux';
import {UserAccount,LoggedIn} from 'Redux/Actions';
import { Token, Requests } from 'Services';
import jwt_decode from 'jwt-decode';
import { Link, Breadcrumbs, Typography } from '@material-ui/core';

import Header from './Header';


const Navigations = (props:any) =>{
    const route = useSelector((state:any) => state.Route);
    const status = useSelector((state:any) => state.Stat);
    const dispatch = useDispatch();



    // const initRoute = async () => {

    //     // await Requests.StaticMethods.delay(2000);
    //     if(Token.exist()){
    //         const token:any = jwt_decode(Token.get());
    //         // const useraccount = await Requests.User.get({id:token.sub});
    //         const useraccount = await user.current.get({id:token.sub});
            
    //         if(useraccount.network_error){
    //             Token.remove();
    //         }else{
    //             if(useraccount.status === 200){

    //                 // initRoutePermissions(useraccount.data.permissions);
    //                 dispatch(UserAccount(useraccount.data,route));
    //                 dispatch(LoggedIn(true));
    //                 setInitialized(true);

    //             }else{
    //                 Token.remove();
    //                 setInitialized(true);
    //             }
    //         }
    //     }else{
    //         setInitialized(true);
    //     }
        
    // }


    return(
        <div className="container-fluid">
            <BrowserRouter>
                <Header />

                <Switch>
                    {
                        route.list.map((value:any,key:number)=>(
                            <Route 
                                exact   =   {value.exact} 
                                strict  =   {value.strict}
                                path    =   {value.path}
                                render  =   { (props) => <value.middleware {...props} component={value.component} />}
                                key     =   {key}
                            />
                        ))
                    }
                    <Route path='/not-found' component={Component.NotFound}/>
                    <Route component={Component.NotFound}/>
                     
                </Switch>
            </BrowserRouter>
        </div>             
    );
}

export default Navigations;