import axios from "axios";
import authorizationHeader from "./authorizationHeader";

const API_URL = "http://localhost:8080/api/addAccident";

const SubmitProtocol = (protocol) => {
    return axios({
     method: 'post',
     url: API_URL,
     headers: authorizationHeader(),
     data: protocol,
    })
};

export default SubmitProtocol;
