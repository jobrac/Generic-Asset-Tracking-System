import React from 'react';
import * as Component from '../Components';
import {ComponentMiddleware, LoginMiddleware} from '../Middleware';
import {
    BrowserRouter,
    Route
} from 'react-router-dom'

import {
    Container
} from '@material-ui/core'


class Navigations extends React.Component<any,any>{



    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Container maxWidth="lg">
                        <Route path="/">
                            <Route exact path ="/" render= {(props) => <ComponentMiddleware {...props} component={Component.Home} />}/>
                            <Route exact path ="/login" component={LoginMiddleware} />
                        </Route>
                    </Container>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Navigations;