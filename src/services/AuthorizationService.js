import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, password, companyDto) => {
    return axios.post(API_URL + "register", {
        username,
        password,
        companyDto
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data) {
                localStorage.setItem("token", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("token");
};


export default {
    register,
    login,
    logout,
};
