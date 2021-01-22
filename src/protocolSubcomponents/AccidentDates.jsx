import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {setDates} from "../actions/protocol";
import {NavLink} from "react-router-dom";


const AccidentDates = () => {
    const {register, errors, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {accidentProtocolDates: dates} = useSelector((state) => state.protocol)

    const accidentProceedingStart = useWatch({control, name: 'accidentProceedingStart',});
    const accidentProceedingEnd = useWatch({control, name: 'accidentProceedingEnd',});
    const accidentDate = useWatch({control, name: 'accidentDate',});
    const accidentTime = useWatch({control, name: 'accidentTime',});


    const saveData = () => {
        dispatch(setDates({accidentProceedingStart, accidentProceedingEnd, accidentDate, accidentTime}));
    }

    return (
        <div className={"form-container"}>
            <h2 className="text-center">3. Dane czasu wypadku</h2>
            <form>
                <div className="container">
                    <label className={"form-label-title"}>Data ustalenia okoliczności wypadku od</label>
                    {errors.accidentProceedingStart && <label className="text-danger"> {errors.accidentProceedingStart.message} </label>}
                    <input
                        onBlur={saveData}
                        name="accidentProceedingStart"
                        type="date"
                        defaultValue={dates.accidentProceedingStart}
                        className={`form-control ${errors.accidentProceedingStart ? "border-danger" : ""}`}
                        ref={register}
                    />


                    <label className={"form-label-title"}>Do</label>
                    {errors.accidentProceedingEnd && <label className="text-danger"> {errors.accidentProceedingEnd.message} </label>}
                    <input
                        onBlur={saveData}
                        name="accidentProceedingEnd"
                        type="date"
                        defaultValue={dates.accidentProceedingEnd}
                        className={`form-control ${errors.accidentProceedingEnd ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Data wypadku</label>
                    {errors.accidentDate && <label className="text-danger"> {errors.accidentDate.message} </label>}
                    <input
                        onBlur={saveData}
                        name="accidentDate"
                        type="date"
                        defaultValue={dates.accidentDate}
                        className={`form-control ${errors.accidentDate ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Godzina wypadku</label>
                    {errors.accidentTime && <label className="text-danger"> {errors.accidentTime.message} </label>}
                    <input
                        onBlur={saveData}
                        name="accidentTime"
                        type="time"
                        defaultValue={dates.accidentTime}
                        className={`form-control ${errors.accidentTime ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <button className="btn-light" type="button">
                        <NavLink
                            className="nav-link text-info" to={"/protokol-wypadku/krok-2"}
                        >Wstecz</NavLink>
                    </button>
                    <button className="float-right btn-light" type="button">
                        <NavLink className={"nav-link text-info"}
                                 to={"/protokol-wypadku/krok-4"}>Dalej</NavLink>
                    </button>

                </div>
            </form>
        </div>
    );
}

export default AccidentDates;