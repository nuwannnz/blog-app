import { UserActionTypes } from "../actions/user.actions";


const defaultState = {
    user: null
};

export const user = (state = defaultState, action) => {
    switch (action.type) {
        case UserActionTypes.USER_LOADED:
            console.log('user loaded reducer', action)
            return {
                user: action.payload
            }

        default:
            return state;
    }
}