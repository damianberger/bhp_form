import {
    SET_PROTOCOL_HEADER,
} from "../actions/types";

const initialState = {
    protocolHeader: {
        companyDto: {},
    },
    protocolVictim: {},
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_PROTOCOL_HEADER:
            return {
                ...state,
                protocolHeader: payload.protocolHeader,
            };
        default:
            return state;
    }
}
