import axios from "axios";


const API_URL = "http://localhost:8080/api/";

const submitProtocol = (protocol) => {
    return axios({
        method: 'post',
        url: API_URL + 'addAccident',
        data: protocol,
    })
};

const getSummary = () => {
    return axios
        .get(API_URL + 'data-summary', {
        }).then(response => response.data)
};

const getProtocol = (number) => {
    return axios
        .get(API_URL + `getAccident?accidentNumber=${number}`, {
        }).then(response => response.data)
};


export default {
    submitProtocol,
    getProtocol,
    getSummary
};
