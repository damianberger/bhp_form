import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const registerWorker = (email, password) => {
    return axios.post(API_URL + "register", {
        email,
        password,
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};


export default {
    registerWorker,
    login,
    logout,
};
