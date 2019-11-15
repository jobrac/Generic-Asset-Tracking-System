import { 
    LoggedIn as li,
    Control as ctrl,
    Breadcrumbs as bc
} from './Types';

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

export const Control = (control:string) => {
    return async (dispatch:any) => {
        dispatch({
            type    : ctrl,
            payload : control
        });
    }
}

export const Breadcrumbs = (breadcrumbs:any) => {
    return async (dispatch:any) => {
        dispatch({
            type    :   bc,
            payload :   breadcrumbs
        });
    }
} 