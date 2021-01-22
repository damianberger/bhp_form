import {SET_PROTOCOL_HEADER, SET_PROTOCOL_INVESTIGATORS, SET_PROTOCOL_DATES, SET_PROTOCOL_VICTIMS} from "./types";


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

export const setDates = ({accidentProceedingStart, accidentProceedingEnd, accidentDate, accidentTime}) => ({
    type: SET_PROTOCOL_DATES,
    payload: {
        accidentProtocolDates: {
            accidentProceedingStart: accidentProceedingStart,
            accidentProceedingEnd: accidentProceedingEnd,
            accidentDate: accidentDate,
            accidentTime: accidentTime,
        }
    }
});

export const setVictims = ({accidentProtocolVictims}) => ({
    type: SET_PROTOCOL_VICTIMS,
    payload: {
        accidentProtocolVictims: accidentProtocolVictims
    }
});
