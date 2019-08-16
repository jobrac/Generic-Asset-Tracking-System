import { UserAccount as UA} from '../Actions/Types';

const initialState = {
    data : {}
};

export default function(state = initialState, action:any) {
	switch (action.type) {
    	case UA:
      		return {
        		data :   state.data      = action.payload,
            }
    	default:
      		return state;
 	}
}
