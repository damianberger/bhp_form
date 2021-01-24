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
    SET_PROTOCOL_ATTACHMENTS, SET_PROTOCOL_FINISH,
} from "../actions/types";

const initialState = {
    protocolNumber: '',
    companyDto: {
        companyName: '',
        street: '',
        city: '',
        postalCode: '',
        taxIdentificationNumber: '',
        pkdNumber: ''
    },
    accidentInvestigatorsDto: [

    ],
    accidentProceedingStart: null,
    accidentProceedingEnd: null,
    accidentDate: null,
    accidentTime: null,
    victimDto: {
        name: '',
        surname: '',
        birthDate: null,
        addressDto: {
            postCode: '',
            city: '',
            street: '',
            houseNumber: '0',
            apartmentNumber: 0,
            peselNumber: '',
            identificationDocumentNumber: ''
        },
        workDepartment: '',
        workplace: '',
        professionCode: ''
    },
    reportedBy: '',
    reportedDate: null,
    accidentCircumstances: '',
    accidentCausesDto: [
        {
            accidentCause: "string"
        }
    ],
    employerFault: 'NIE',
    employeeFault: 'NIE',
    employeeIntoxication: 'NIE',
    accidentEffectsDto: [
        {
            accidentEffect: ''
        }
    ],
    accidentAtWork: true,
    accidentReason: '',
    accidentTypeDto: {
        acc1: true,
        acc2: false,
        acc3: true,
        acc4: false,
        acc5: true,
    },
    afterAccidentRecommendationsDto: [
        {
            recommendation: ''
        }
    ],
    dateOfPreparation: null,
    obstaclesOfPreparationInTerm: '',
    protocolAttachmentsDto: [
        {
            attachmentName: ''
        }
    ],
    finishedProtocol: false,
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_PROTOCOL_HEADER:
            return {
                ...state,
                protocolNumber: payload.protocolNumber,
                companyDto: payload.companyDto,
            };
        case SET_PROTOCOL_INVESTIGATORS:
            return {
                ...state,
                accidentInvestigatorsDto: payload.accidentInvestigatorsDto,
            };
        case SET_PROTOCOL_DATES:
            return {
                ...state,
                accidentProceedingStart: payload.accidentProceedingStart,
                accidentProceedingEnd: payload.accidentProceedingEnd,
                accidentDate: payload.accidentDate,
                accidentTime: payload.accidentTime,
            };
        case SET_PROTOCOL_VICTIM:
            return {
                ...state,
                victimDto: payload.victimDto,
            };
        case SET_PROTOCOL_CIRCUMSTANCES:
            return {
                ...state,
                reportedBy: payload.reportedBy,
                reportedDate: payload.reportedDate,
                accidentCircumstances: payload.accidentCircumstances,
            };
        case SET_PROTOCOL_CAUSES:
            return {
                ...state,
                accidentCausesDto: payload.accidentCausesDto,
            };
        case SET_PROTOCOL_FAULT:
            return {
                ...state,
                employerFault: payload.employerFault,
                employeeFault: payload.employeeFault,
                employeeIntoxication: payload.employeeIntoxication,
            };
        case SET_PROTOCOL_EFFECTS:
            return {
                ...state,
                accidentEffectsDto: payload.accidentEffectsDto,
            };
        case SET_PROTOCOL_TYPES:
            return {
                ...state,
                accidentAtWork: payload.accidentAtWork,
                accidentReason: payload.accidentReason,
                accidentTypeDto: payload.accidentTypeDto,
            };
        case SET_PROTOCOL_RECOMMENDATIONS:
            return {
                ...state,
                afterAccidentRecommendationsDto: payload.afterAccidentRecommendationsDto,
            };
        case SET_PROTOCOL_OBSTACLES:
            return {
                ...state,
                dateOfPreparation: payload.dateOfPreparation,
                obstaclesOfPreparationInTerm: payload.obstaclesOfPreparationInTerm,
            };
        case SET_PROTOCOL_ATTACHMENTS:
            return {
                ...state,
                protocolAttachmentsDto: payload.protocolAttachmentsDto,
            };
        case SET_PROTOCOL_FINISH:
            return {
                ...state,
                finishedProtocol: payload.finishedProtocol,
            };
        default:
            return state;
    }
}

