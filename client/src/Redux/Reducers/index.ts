import { combineReducers } from 'redux';
import UserAccount from './UserAccount';
import Route from './Route';
import Stat from './Stat';
import Data from './Data';

export default combineReducers({
    UserAccount,
    Route,
    Stat,
    Data,
});
