import { getUser } from "../api/user.api";


export const UserActionTypes = {
    USER_LOADED: 'USER_LOADED'
};


const userLoaded = user => ({
    type: UserActionTypes.USER_LOADED,
    payload: user
});



export const loadUserAsync = () => {
    return async function (dispatch, getState) {
        try {
            // get posts
            const user = await getUser();
            console.log('loaded user', user);
            // dispatch
            dispatch(userLoaded(user.data));
        } catch (err) {
            // display err
        }
    }
}

