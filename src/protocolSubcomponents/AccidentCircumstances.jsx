import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {setCircumstances} from "../actions/protocol";
import {NavLink} from "react-router-dom";


const AccidentCircumstances = () => {
    const {register, errors, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {reportedBy: reportBy} = useSelector((state) => state.protocol)
    const {reportedDate: reportDate} = useSelector((state) => state.protocol)
    const {accidentCircumstances: circumstances} = useSelector((state) => state.protocol)

    const reportedBy = useWatch({control, name: 'reportedBy',});
    const reportedDate = useWatch({control, name: 'reportedDate',});
    const accidentCircumstances = useWatch({control, name: 'accidentCircumstances',});



    const saveData = () => {
        dispatch(setCircumstances({reportedBy, reportedDate, accidentCircumstances}));
    }

    return (
        <div className={"form-container"}>
            <h2 className="text-center">5. Okoliczności wypadku</h2>
            <form>
                <div className="container">
                    <label className={"form-label-title"}>Zgłaszający wypadek</label>
                    {errors.reportedBy && <label className="text-danger"> {errors.reportedBy.message} </label>}
                    <input
                        onBlur={saveData}
                        name="reportedBy"
                        type="text"
                        defaultValue={reportBy}
                        className={`form-control ${errors.reportedBy ? "border-danger" : ""}`}
                        ref={register}
                    />


                    <label className={"form-label-title"}>Data zgłoszenia</label>
                    {errors.reportedDate && <label className="text-danger"> {errors.reportedDate.message} </label>}
                    <input
                        onBlur={saveData}
                        name="reportedDate"
                        type="date"
                        defaultValue={reportDate}
                        className={`form-control ${errors.reportedDate ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Okoliczności wypadku</label>
                    {errors.accidentCircumstances && <label className="text-danger"> {errors.accidentCircumstances.message} </label>}
                    <textarea
                        onBlur={saveData}
                        name="accidentCircumstances"
                        defaultValue={circumstances}
                        className={`form-control ${errors.accidentCircumstances ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <button className="btn-light" type="button">
                        <NavLink
                            className="nav-link text-info" to={"/protokol-wypadku/krok-4"}
                        >Wstecz</NavLink>
                    </button>
                    <button className="float-right btn-light" type="button">
                        <NavLink className={"nav-link text-info"}
                                 to={"/protokol-wypadku/krok-6"}>Dalej</NavLink>
                    </button>

                </div>
            </form>
        </div>
    );
}

export default AccidentCircumstances;
