import {
    SET_PROTOCOL_HEADER,
    SET_PROTOCOL_INVESTIGATORS,
    SET_PROTOCOL_DATES,
} from "../actions/types";

const initialState = {
    protocolHeader: {
        companyDto: {},
    },
    accidentProtocolInvestigators: [],
    accidentProtocolDates: {},
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_PROTOCOL_HEADER:
            return {
                ...state,
                protocolHeader: payload.protocolHeader,
            };
        case SET_PROTOCOL_INVESTIGATORS:
            return {
                ...state,
                accidentProtocolInvestigators: payload.accidentProtocolInvestigators,
            };
        case SET_PROTOCOL_DATES:
            return {
                ...state,
                accidentProtocolDates: payload.accidentProtocolDates,
            };
        default:
            return state;
    }
}
