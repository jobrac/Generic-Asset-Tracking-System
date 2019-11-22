import { LoggedIn, Control, Breadcrumbs } from '../Actions/Types';

const initialState:any = {
	loggedIn 	: false,
	control 	: '',
	breadcrumbs  : [],
};

export default function(state = initialState, action:any) {
	switch (action.type) {
		
    	case LoggedIn:
			return {
				...state,
				loggedIn : action.payload
			};
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
    	default:
      		return state;
 	}
};