import { combineReducers } from 'redux';
import UserAccount from './UserAccount';
import Route from './Route';
import Stat from './Stat';
import Data from './Data';
import TableDisplay from './TableDisplay';
import {LoggedIn} from '../Actions/Types';

const appReducer =  combineReducers({
    UserAccount,
    Route,
    Stat,
    Data,
    TableDisplay
});

const rootReducer = (state:any,action:any) => {

	if(action.type === LoggedIn && action.payload === false){
		state = {};
	}

	return appReducer(state,action);
}

export default rootReducer;


