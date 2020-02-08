import axois from "axios";
import { API_PATH } from "../constants";

const API = `${API_PATH}/blog-post`;

export const getPosts = () => {
    return axois.get(API);
}

export const createPost = blogPostDto => {
    return axois.post(API, blogPostDto);
}

export const updatePost = blogPostDto => {
    return axois.post(`${API}/update`, blogPostDto);
}

export const deletePost = blogPostId => {
    return axois.post(`${API}/delete`, blogPostId);
}