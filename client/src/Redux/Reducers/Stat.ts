import { LoggedIn, Control, Breadcrumbs,Error } from '../Actions/Types';


type status = "" | "relogin" | "server_error";
const error:status = "" ;


const initialState:any = {
	loggedIn 	: false,
	control 	: '',
	breadcrumbs : [],
	error
};

export default function(state = initialState, action:any) {
	switch (action.type) {
		
    	case LoggedIn:
    		if(action.payload)			
	    		return {
					...state,
					loggedIn : action.payload
				};
			else 
				return initialState;
		case Control:
			return {
				...state,
				control : action.payload
			}
		case Breadcrumbs:
			return {
				...state,
				breadcrumbs : action.payload
			}
		case Error:
			return {
				...state,
				error 		: action.payload,
			}

    	default:
      		return state;
 	}
};