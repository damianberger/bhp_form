import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {setDates} from "../actions/protocol";



const AccidentDates = () => {
    const {register, errors, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();

    const {accidentProceedingStart: aPS} = useSelector((state) => state.protocol)
    const {accidentProceedingEnd: aPE} = useSelector((state) => state.protocol)
    const {accidentDate: aD} = useSelector((state) => state.protocol)
    const {accidentTime: aT} = useSelector((state) => state.protocol)
    const accidentProceedingStart = useWatch({control, name: 'accidentProceedingStart',});
    const accidentProceedingEnd = useWatch({control, name: 'accidentProceedingEnd',});
    const accidentDate = useWatch({control, name: 'accidentDate',});
    const accidentTimeToFormat = useWatch({control, name: 'accidentTime',});

    let accidentTime = "";
    let time = "";
    if (accidentDate && accidentTimeToFormat) {
        accidentTime = accidentDate + 'T' + accidentTimeToFormat + ':00.000Z'
        time = aT.substring(aT.indexOf("T") + 1).substring(0, 5);
    }

    const saveData = () => {
        dispatch(setDates({accidentProceedingStart, accidentProceedingEnd, accidentDate, accidentTime}));
    }

    return (
        <div className="container">
            <h2 className="text-center">3. Dane czasu wypadku</h2>

            <label className={"form-label-title"}>Data ustalenia okoliczności wypadku od</label>
            {errors.accidentProceedingStart &&
            <label className="text-danger"> {errors.accidentProceedingStart.message} </label>}
            <input
                onBlur={saveData}
                name="accidentProceedingStart"
                type="date"
                defaultValue={aPS}
                className={`form-control ${errors.accidentProceedingStart ? "border-danger" : ""}`}
                ref={register}
            />


            <label className={"form-label-title"}>Do</label>
            {errors.accidentProceedingEnd &&
            <label className="text-danger"> {errors.accidentProceedingEnd.message} </label>}
            <input
                onBlur={saveData}
                name="accidentProceedingEnd"
                type="date"
                defaultValue={aPE}
                className={`form-control ${errors.accidentProceedingEnd ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Data wypadku</label>
            {errors.accidentDate && <label className="text-danger"> {errors.accidentDate.message} </label>}
            <input
                onBlur={saveData}
                name="accidentDate"
                type="date"
                defaultValue={aD}
                className={`form-control ${errors.accidentDate ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Godzina wypadku</label>
            {errors.accidentTime && <label className="text-danger"> {errors.accidentTime.message} </label>}
            <input
                onBlur={saveData}
                name="accidentTime"
                type="time"
                defaultValue={time}
                className={`form-control ${errors.accidentTime ? "border-danger" : ""}`}
                ref={register}
            />
        </div>
    );
}

export default AccidentDates;
