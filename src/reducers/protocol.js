import {
    SET_PROTOCOL_HEADER,
    SET_PROTOCOL_INVESTIGATORS,
    SET_PROTOCOL_DATES,
    SET_PROTOCOL_VICTIM,
    SET_PROTOCOL_CIRCUMSTANCES,
    SET_PROTOCOL_CAUSES,
    SET_PROTOCOL_FAULT,
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
    accidentInvestigatorsDto: [],
    accidentProceedingStart: '',
    accidentProceedingEnd: '',
    accidentDate: '',
    accidentTime: '',
    victimDto: {
        name: '',
        surname: '',
        birthDate: '',
        addressDto: {
            postCode: '',
            city: '',
            street: '',
            houseNumber: '',
            apartmentNumber: '',
            peselNumber: '',
            identificationDocumentNumber: ''
        },
        workDepartment: '',
        workplace: '',
        professionCode: ''
    },
    reportedBy: '',
    reportedDate: '',
    accidentCircumstances: '',
    accidentCausesDto: [],
    employerFault: 'NIE',
    employeeFault: 'NIE',
    employeeIntoxication: 'NIE',
    accidentEffectsDto: [
        {
            accidentEffect: ''
        }
    ],
    accidentAtWork: false,
    accidentReason: '',
    accidentTypeDto: [
        {
            type: ''
        }
    ],
    afterAccidentRecommendationsDto: [
        {
            recommendation: ''
        }
    ],
    dateOfPreparation: '',
    obstaclesOfPreparationInTerm: '',
    protocolAttachmentsDto: [
        {
            attachmentName: ''
        }
    ],
    finishedProtocol: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action;

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
        default:
            return state;
    }
}

