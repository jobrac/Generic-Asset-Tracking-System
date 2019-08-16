import React from 'react';
import Navigations from 'Routes';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const App =() => {
    return(
        <Provider store={store}>
            <Navigations />
        </Provider>
    );
}

export default App;
