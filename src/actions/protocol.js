import {SET_PROTOCOL_HEADER, SET_PROTOCOL_INVESTIGATORS} from "./types";


export const setHeader = ({protocolNumber, companyDto}) => ({
    type: SET_PROTOCOL_HEADER,
    payload: {
        protocolHeader: {
            protocolNumber: protocolNumber,
            companyDto: companyDto
        }
    }
});

export const setInvestigators = ({accidentProtocolInvestigators}) => ({
    type: SET_PROTOCOL_INVESTIGATORS,
    payload: {
        accidentProtocolInvestigators: accidentProtocolInvestigators
    }
});
