import {
    SET_PROTOCOL_HEADER,
    SET_PROTOCOL_INVESTIGATORS,
    SET_PROTOCOL_DATES,
    SET_PROTOCOL_VICTIM,
    SET_PROTOCOL_CIRCUMSTANCES,
    SET_PROTOCOL_CAUSES,
    SET_PROTOCOL_FAULT,
    SET_PROTOCOL_EFFECTS,
    SET_PROTOCOL_TYPES,
    SET_PROTOCOL_RECOMMENDATIONS,
    SET_PROTOCOL_OBSTACLES,
    SET_PROTOCOL_ATTACHMENTS,
    SET_PROTOCOL_FINISH,
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

export const setEffects = ({accidentEffectsDto}) => ({
    type: SET_PROTOCOL_EFFECTS,
    payload: {
        accidentEffectsDto: accidentEffectsDto,
    }
});

export const setTypes = ({accidentAtWork, accidentReason, accidentTypeDto}) => ({
    type: SET_PROTOCOL_TYPES,
    payload: {
        accidentAtWork: accidentAtWork,
        accidentReason: accidentReason,
        accidentTypeDto: accidentTypeDto,
    }
});

export const setRecommendations = ({afterAccidentRecommendationsDto}) => ({
    type: SET_PROTOCOL_RECOMMENDATIONS,
    payload: {
        afterAccidentRecommendationsDto: afterAccidentRecommendationsDto,
    }
});

export const setObstacles = ({dateOfPreparation, obstaclesOfPreparationInTerm}) => ({
    type: SET_PROTOCOL_OBSTACLES,
    payload: {
        dateOfPreparation: dateOfPreparation,
        obstaclesOfPreparationInTerm: obstaclesOfPreparationInTerm,
    }
});

export const setAttachments = ({protocolAttachmentsDto}) => ({
    type: SET_PROTOCOL_ATTACHMENTS,
    payload: {
        protocolAttachmentsDto: protocolAttachmentsDto,
    }
});

export const setFinish = ({finishedProtocol}) => ({
    type: SET_PROTOCOL_FINISH,
    payload: {
        finishedProtocol: finishedProtocol,
    }
});
