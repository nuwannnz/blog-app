import { combineReducers } from "redux";

import { posts } from "./post.reducer";
import { user } from "./user.reducer";

export default combineReducers({
    posts,
    user
})