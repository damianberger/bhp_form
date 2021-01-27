import {
    GET_DATA_SUMMARY,
} from "../actions/types";

const initialState = {}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_DATA_SUMMARY:
            return {
                ...state,
                dataSummary: payload.dataSummary,
            };
        default:
            return state;
    }
}

