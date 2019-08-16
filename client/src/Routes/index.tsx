import React from 'react';
import * as Component from 'Components';
import {ComponentMiddleware, LoginMiddleware} from 'Middleware';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

class Navigations extends React.Component<any,any>{

    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Switch>  
                        <Route exact path ="/login" component={LoginMiddleware} />
                        <Route path ="/" strict>
                            <Component.Navigation>
                                <Route exact path ="/" render= {(props) => <ComponentMiddleware {...props} component={Component.Home} />}/>
                            </Component.Navigation>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Navigations;