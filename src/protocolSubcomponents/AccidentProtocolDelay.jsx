import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setAttachments, setObstacles} from "../actions/protocol";

const AccidentProtocolDelay = () => {
    const dispatch = useDispatch();
    const {register, errors, control, setValue} = useForm({mode: 'all'});

    const {dateOfPreparation: datePreparation} = useSelector((state) => state.protocol)
    const {obstaclesOfPreparationInTerm: obstacles} = useSelector((state) => state.protocol)

    let dateOfPreparation = useWatch({control, name: 'dateOfPreparation',});
    let obstaclesOfPreparationInTerm = useWatch({control, name: 'obstaclesOfPreparationInTerm',});

    const saveData = () => {
        dispatch(setObstacles({dateOfPreparation, obstaclesOfPreparationInTerm}));
    }


    return (
        <div className="container">
            <label className={"form-label-title"}>Data przygotowanie protokołu</label>
            {errors.dateOfPreparation && <label className="text-danger"> {errors.dateOfPreparation.message} </label>}
            <input
                name="dateOfPreparation"
                type="date"
                onBlur={saveData}
                defaultValue={datePreparation}
                className={`form-control ${errors.dateOfPreparation ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Przyczyny przekroczenia 14 dni na złożenie?</label>
            {errors.obstaclesOfPreparationInTerm &&
            <label className="text-danger"> {errors.obstaclesOfPreparationInTerm.message} </label>}
            <input
                name="obstaclesOfPreparationInTerm"
                type="text"
                onBlur={saveData}
                defaultValue={obstacles}
                className={`form-control ${errors.obstaclesOfPreparationInTerm ? "border-danger" : ""}`}
                ref={register}
            />
        </div>
    );
}

export default AccidentProtocolDelay;
