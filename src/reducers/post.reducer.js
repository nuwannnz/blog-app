import { PostActionTypes } from "../actions/post.actions";


const defaultState = {
    postList: []
};

export const posts = (state = defaultState, action) => {
    switch (action.type) {
        case PostActionTypes.POSTS_LOADED:
            return {
                postList: [...action.payload]
            }

        case PostActionTypes.ADD_POST:
            return {
                postList: [...state.postList, action.payload]
            };

        case PostActionTypes.DELETE_POST:
            return {
                postList: [...state.postList.filter(p => p.postId !== action.payload)]
            }

        case PostActionTypes.UPDATE_POST:
            return {
                postList: [...state.postList.map(p => {
                    if (p.postId === action.payload.postId) {
                        return action.payload;
                    }
                    return p;
                })]
            }

        default:
            return state;
    }
}