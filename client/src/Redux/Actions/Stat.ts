import { LoggedIn as li} from './Types';

// interface Status {
//     loggedIn : Boolean
// }

export const LoggedIn = (status:boolean) => {
    return async (dispatch:any) => {
        dispatch({
            type    : li,
            payload : status
        });
    }
}