import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import * as Component from 'Components';
import {useSelector,useDispatch} from 'react-redux';
import {UserAccount,LoggedIn} from 'Redux/Actions';
import { Token, Requests } from 'Services';
import jwt_decode from 'jwt-decode';
import { Link, Breadcrumbs, Typography } from '@material-ui/core';
import Fetcher from 'Services/Fetcher';


const Navigations = (props:any) =>{

    const [ initialized, setInitialized ] = React.useState(false);
    const route = useSelector((state:any) => state.Route);
    const status = useSelector((state:any) => state.Stat);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        initRoute();
    },[]);



    const initRoute = async () => {

        // await Requests.StaticMethods.delay(2000);
        if(Token.exist()){
            const token:any = jwt_decode(Token.get());
            const useraccount = await Requests.User.get({id:token.sub});
            
            if(useraccount.network_error){
                Token.remove();
            }else{
                if(useraccount.status === 200){

                    // initRoutePermissions(useraccount.data.permissions);
                    dispatch(UserAccount(useraccount.data,route));
                    dispatch(LoggedIn(true));
                    setInitialized(true);

                }else{
                    Token.remove();
                    setInitialized(true);
                }
            }
        }else{
            setInitialized(true);
        }
        
    }

    // const initRoutePermissions = (permissions:any) => {
    //     let routes = route;
    //     Object.keys(permissions).forEach( (value:any) =>{
    //         if(value !== 'superuser' && value !== 'admin'){
    //             if(permissions[value].view === 1){
    //                 routes.list.splice(routes.list.findIndex(({name}:any) => name === value),1);
    //             }
    //         }
    //     });
    // }

    return(
        initialized ? 
            <div className="container-fluid">
                <BrowserRouter>
                    {
                        status.loggedIn ? 
                            <React.Fragment>    
                                <Fetcher />
                                <Component.Navigation />
                                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                                        {
                                            status.breadcrumbs.length !== 0  ?
                                                
                                                status.breadcrumbs.length === 1
                                                
                                                ?
                                                    <Typography color="textPrimary">{status.breadcrumbs[0].name}</Typography>
                                                :
                                                    <React.Fragment>
                                                        {
                                                            status.breadcrumbs.slice(0,-1).map((value:any,key:any)=>(
                                                                <Link color="inherit" href={value.url} key={key} >
                                                                    {value.name}
                                                                </Link>
                                                            ))
                                                        }
                                                        
                                                        <Typography color="textPrimary">{status.breadcrumbs.slice(-1)[0].name}</Typography>
                                                    </React.Fragment>
                                            :  ''
                                        }
                                        
                                    </Breadcrumbs>
                            </React.Fragment>     
                         : ''
                    }

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
        : null
    );
}

export default Navigations;