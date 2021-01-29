import {
    SET_PROTOCOL_NUMBER,
    SET_PROTOCOL_COMPANY,
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
    CLEAR_PROTOCOL,
    GET_PROTOCOL,
} from "./types";
import ProtocolService from "../services/ProtocolService";

export const clearProtocol = () => ({
    type: CLEAR_PROTOCOL,
    payload: {}
});

export const getTheProtocol = (number) => (dispatch) => {
    return ProtocolService.getProtocol(number).then(
        (data) => {
            dispatch({
                type: GET_PROTOCOL,
                payload: {
                    protocol: data,
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

export const setNumber = ({protocolNumber}) => ({
    type: SET_PROTOCOL_NUMBER,
    payload: {
            protocolNumber: protocolNumber,
    }
});

export const setCompany = ({companyDto}) => ({
    type: SET_PROTOCOL_COMPANY,
    payload: {
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

export const setTypes = ({accidentAtWork, accidentReason, individualAccident, collectiveAccident, fatalAccident, seriousAccident, workAbsence,}) => ({
    type: SET_PROTOCOL_TYPES,
    payload: {
        accidentAtWork: accidentAtWork,
        accidentReason: accidentReason,
        individualAccident: individualAccident,
        collectiveAccident: collectiveAccident,
        fatalAccident: fatalAccident,
        seriousAccident: seriousAccident,
        workAbsence: workAbsence,

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
