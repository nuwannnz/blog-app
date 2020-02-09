import axois from "axios";
import { API_PATH } from "../constants";

const API = `${API_PATH}/user`;

export const getUser = () => {
    return axois.get(API);
}

