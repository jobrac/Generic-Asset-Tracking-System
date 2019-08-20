import React from 'react';
import {ComponentMiddleware} from 'Middleware';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import * as Component from 'Components';
import {OutsideNav} from './OutsideNav';
import {InsideNav} from './InsideNav';

const Navigations = (props:any) =>{
    return(
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    {
                        OutsideNav.map((element,index) => 
                            <Route exact path ={element.path} component={element.component} key={index} />
                        )
                    }
                   
                    <Route path ="/" strict>
                        <Component.Navigation>
                            {
                                InsideNav.map((element,index) => 
                                    <Route exact path ={element.path} render= {(props) => <ComponentMiddleware {...props} component={element.component} />} key={index} />
                                    // <Route exact path ={element.path} component={element.component} key={index} />
                                )
                            }
                        </Component.Navigation>
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Navigations;