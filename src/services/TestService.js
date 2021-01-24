import axios from "axios";
import authorizationHeader from "./authorizationHeader";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "public");
};

const getUserContent = () => {
    return axios.get(API_URL + "private", { headers: authorizationHeader() });
};

export default {
    getPublicContent,
    getUserContent,
};

