import {SET_PROTOCOL_HEADER} from "./types";


export const setHeader = ({protocolNumber, companyDto}) => ({
    type: SET_PROTOCOL_HEADER,
    payload: {
        protocolHeader: {
            protocolNumber: protocolNumber,
            companyDto: companyDto
        }
    }
});
