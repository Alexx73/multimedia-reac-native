import { SIGN_IN } from "../actions/signin.action";

const INITIAL_STATE = {
    token: null, 
    userId: null,
    logout: null,
}

const SignInReducer = ( state= INITIAL_STATE, action ) => {
    switch(action.type) {
        case SIGN_IN: 
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                logout: null,
            }
            default:
                return state;
    }
}

export default SignInReducer;