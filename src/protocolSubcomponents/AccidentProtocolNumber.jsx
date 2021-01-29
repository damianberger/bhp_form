import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm, useWatch} from "react-hook-form";

import {setNumber} from "../actions/protocol";


const AccidentNumber = () => {
    const {register, errors, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();

    const {protocolNumber: number} = useSelector((state) => state.protocol)
    const protocolNumber = useWatch({control, name: 'protocolNumber',});

    const saveData = () => {
        dispatch(setNumber({protocolNumber}));
    }

    return (
        <div className="container">
            <label className={"form-label-title"}>Numer protokołu</label>
            {errors.protocolNumber && <label className="text-danger"> {errors.protocolNumber.message} </label>}
            <input
                onBlur={saveData}
                name="protocolNumber"
                type="text"
                defaultValue={number}
                className={`form-control ${errors.protocolNumber ? "border-danger" : ""}`}
                ref={register}
            />
        </div>
    );
}

export default AccidentNumber;
