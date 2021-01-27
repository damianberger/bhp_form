import {
    GET_DATA_SUMMARY,
} from "./types";

import ProtocolService from "../services/ProtocolService";

export const getDataSummary = () => (dispatch) => {
    return ProtocolService.getSummary().then(
        (data) => {
            dispatch({
                type: GET_DATA_SUMMARY,
                payload: {
                    dataSummary: data
                },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            console.log(message)
            return Promise.reject();
        }
    );
};


