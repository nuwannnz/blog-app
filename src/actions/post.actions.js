import { getPosts, createPost } from "../api/post.api";


export const PostActionTypes = {
    ADD_POST: 'ADD_POST',
    UPDATE_POST: 'UPDATE_POST',
    DELETE_POST: 'DELETE_POST',
    POSTS_LOADED: 'POSTS_LOADED'
};


const postsLoaded = posts = ({
    type: PostActionTypes.POSTS_LOADED,
    payload: posts
});

const postAdded = post = ({
    type: PostActionTypes.ADD_POST,
    payload: post
});

const postUpdated = post = ({
    type: PostActionTypes.UPDATE_POST,
    payload: post
});

const postDeleted = post = ({
    type: PostActionTypes.DELETE_POST,
    payload: post
});


export const loadPostsAsync = () => {
    return async function (dispatch, getState) {
        try {
            // get posts
            const posts = await getPosts();
            // dispatch
            dispatch(postsLoaded(posts));
        } catch (err) {
            // display err
        }
    }
}

export const addPostAsync = post => {
    return async function (dispatch, getState) {
        try {
            // add post
            const addedPost = await createPost(post);
            // dispatch
            dispatch(postAdded(addedPost));
        } catch (err) {
            // display err   
        }
    }
}

export const updatePostAsync = post => {
    return async function (dispatch, getState) {
        try {
            // update post
            const updatedPost = await updatedPost(post);
            // dispatch
            dispatch(postUpdated(updatedPost));
        } catch (err) {
            // display err
        }
    }
}

export const deletePostAsync = postId => {
    return async function (dispatch, getState) {
        try {
            // delete post
            const deletedPostId = await deletedPostId(postId);
            // dispatch
            dispatch(postDeleted(deletedPostId));
        } catch (err) {
            // display err
        }
    }
}