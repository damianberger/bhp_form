import axios from "axios";

import authorizationHeader from "./authorizationHeader";

const API_URL = "http://localhost:8080/api";

const submitProtocol = (protocol) => {
    return axios({
        method: 'post',
        url: API_URL + '/accident/addAccident',
        data: protocol,
        headers: authorizationHeader()
    })
};

const getSummary = () => {
    return axios
        .get(API_URL + '/data-summary', {
            headers: authorizationHeader()
        }).then(response => response.data)
};

const getProtocol = (number) => {
    return axios
        .get(API_URL + `/accident/getAccident?accidentNumber=${number}`, {
            headers: authorizationHeader()
        }).then(response => response.data)
};


export default {
    submitProtocol,
    getProtocol,
    getSummary
};
