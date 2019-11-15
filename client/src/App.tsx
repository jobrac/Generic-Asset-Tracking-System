import React from 'react';
import Navigations from 'Routes';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { SnackbarProvider } from 'notistack';
import 'AppStyle.scss';

const App = () => {
    return(
        <Provider store={store}>
            <SnackbarProvider maxSnack={10}>
                <Navigations />
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
