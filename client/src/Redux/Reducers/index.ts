import { combineReducers } from 'redux';
import UserAccount from './UserAccount';
import Route from './Route';
import Stat from './Stat';
import Data from './Data';
import TableDisplay from './TableDisplay';

export default combineReducers({
    UserAccount,
    Route,
    Stat,
    Data,
    TableDisplay
});
