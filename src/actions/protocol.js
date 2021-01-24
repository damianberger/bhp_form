import {
    SET_PROTOCOL_HEADER,
    SET_PROTOCOL_INVESTIGATORS,
    SET_PROTOCOL_DATES,
    SET_PROTOCOL_VICTIM,
    SET_PROTOCOL_CIRCUMSTANCES,
    SET_PROTOCOL_CAUSES,
    SET_PROTOCOL_FAULT
} from "./types";


export const setHeader = ({protocolNumber, companyDto}) => ({
    type: SET_PROTOCOL_HEADER,
    payload: {
            protocolNumber: protocolNumber,
            companyDto: companyDto,
    }
});

export const setInvestigators = ({accidentInvestigatorsDto}) => ({
    type: SET_PROTOCOL_INVESTIGATORS,
    payload: {
        accidentInvestigatorsDto: accidentInvestigatorsDto,
    }
});

export const setDates = ({accidentProceedingStart, accidentProceedingEnd, accidentDate, accidentTime}) => ({
    type: SET_PROTOCOL_DATES,
    payload: {
            accidentProceedingStart: accidentProceedingStart,
            accidentProceedingEnd: accidentProceedingEnd,
            accidentDate: accidentDate,
            accidentTime: accidentTime,
    }
});

export const setVictim = ({victimDto}) => ({
    type: SET_PROTOCOL_VICTIM,
    payload: {
        victimDto: victimDto,
    }
});

export const setCircumstances = ({reportedBy, reportedDate, accidentCircumstances}) => ({
    type: SET_PROTOCOL_CIRCUMSTANCES,
    payload: {
        reportedBy: reportedBy,
        reportedDate: reportedDate,
        accidentCircumstances: accidentCircumstances,
    }
});

export const setCauses = ({accidentCausesDto}) => ({
    type: SET_PROTOCOL_CAUSES,
    payload: {
        accidentCausesDto: accidentCausesDto,
    }
});

export const setFault = ({employeeFault, employerFault, employeeIntoxication}) => ({
    type: SET_PROTOCOL_FAULT,
    payload: {
        employeeFault: employeeFault,
        employerFault: employerFault,
        employeeIntoxication: employeeIntoxication,
    }
});
