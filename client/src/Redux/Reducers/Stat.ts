import { LoggedIn} from '../Actions/Types';

const initialState = {
	loggedIn 	: false,
};

export default function(state = initialState, action:any) {
	switch (action.type) {
		
    	case LoggedIn:
			return {
				...state,
				loggedIn : action.payload
			};
    	default:
      		return state;
 	}
};