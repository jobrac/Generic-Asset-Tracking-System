import { LoggedIn, Control, Breadcrumbs } from '../Actions/Types';

const initialState = {
	loggedIn 	: false,
	control 	: '',
	breadcumbs  : {},
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
				breadcumbs : action.breadcumbs
			}
    	default:
      		return state;
 	}
};