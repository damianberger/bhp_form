import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm, useWatch} from "react-hook-form";

import {setCauses, setFault} from "../actions/protocol";

const AccidentFault = () => {
    const {register, errors, control, setValue} = useForm({mode: 'all'});
    const dispatch = useDispatch();

    const {employerFault: employerF} = useSelector((state) => state.protocol)
    const {employeeFault: employeeF} = useSelector((state) => state.protocol)
    const {employeeIntoxication: employeeI} = useSelector((state) => state.protocol)
    let employerFault = useWatch({control, name: 'employerFault',});
    let employeeFault = useWatch({control, name: 'employeeFault',});
    let employeeIntoxication = useWatch({control, name: 'employeeIntoxication',});

    const saveData = () => {
        dispatch(setFault({employerFault, employeeFault, employeeIntoxication}));
    }

    return (
        <div className="container">
            <label className={"form-label-title"}>Wypadek z winy pracodawcy</label>
            {errors.employerFault && <label className="text-danger"> {errors.employerFault.message} </label>}
            <textarea
                onBlur={saveData}
                defaultValue={employerF}
                name="employerFault"
                className={`form-control ${errors.employerFault ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Wypadek z winy pracownika</label>
            {errors.employeeFault && <label className="text-danger"> {errors.employeeFault.message} </label>}
            <textarea
                onBlur={saveData}
                defaultValue={employeeF}
                name="employeeFault"
                className={`form-control ${errors.employeeFault ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Pracownik był w stanie nietrzeźwości lub pod wpływem środków
                odurzających</label>
            {errors.employeeIntoxication &&
            <label className="text-danger"> {errors.employeeIntoxication.message} </label>}
            <textarea
                onBlur={saveData}
                defaultValue={employeeI}
                name="employeeIntoxication"
                className={`form-control ${errors.employeeIntoxication ? "border-danger" : ""}`}
                ref={register}
            />
        </div>
    );
}

export default AccidentFault;
