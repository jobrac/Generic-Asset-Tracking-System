import { Route as UA, Nav as nv } from './Types';

export const Route = (a:any) => {
    return (dispatch:any) => {
        dispatch({
            type    : UA,
            payload : a
        });
    }
}



export const Nav = (a:any) => {
    
    return (dispatch:any) => {
        dispatch({
            type    : nv,
            payload : a
        });
    }
}
