import { UserAccount as UA} from '../Actions/Types';

const initialState = {};

export default function(state = initialState, action:any) {
	switch (action.type) {
    	case UA:
      		return action.payload
    	default:
      		return state;
 	}
}
