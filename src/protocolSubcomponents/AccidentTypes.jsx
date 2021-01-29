import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setTypes} from "../actions/protocol";

const AccidentTypes = () => {
    const dispatch = useDispatch();
    const {register, errors, control, setValue} = useForm({mode: 'all'});


    const {individualAccident: individual} = useSelector((state) => state.protocol)
    const {collectiveAccident: collective} = useSelector((state) => state.protocol)
    const {fatalAccident: fatal} = useSelector((state) => state.protocol)
    const {seriousAccident: serious} = useSelector((state) => state.protocol)
    const {workAbsence: absence} = useSelector((state) => state.protocol)
    const {accidentAtWork: atWork} = useSelector((state) => state.protocol)
    const {accidentReason: reason} = useSelector((state) => state.protocol)


    let individualAccident = useWatch({control, name: 'individualAccident',});
    let collectiveAccident = useWatch({control, name: 'collectiveAccident',});
    let fatalAccident = useWatch({control, name: 'fatalAccident',});
    let seriousAccident = useWatch({control, name: 'seriousAccident',});
    let workAbsence = useWatch({control, name: 'workAbsence',});
    let accidentAtWork = useWatch({control, name: 'accidentAtWork',});
    let accidentReason = useWatch({control, name: 'accidentReason',});


    const saveData = () => {
        dispatch(setTypes({
            individualAccident,
            collectiveAccident,
            fatalAccident,
            seriousAccident,
            workAbsence,
            accidentAtWork,
            accidentReason,
        }));
    }

    return (
        <div className="container">
            <h2 className="text-center">8. Typy wypadku</h2>
            <label className={"form-label-title"}>Wypadek w pracy</label>
            <input type="checkbox" name="accidentAtWork" onBlur={saveData} ref={register} defaultChecked={atWork}/><br/><br/>

            <label className={"form-label-title"}>Powód wypadku</label>
            {errors.accidentReason && <label className="text-danger"> {errors.accidentReason.message} </label>}
            <textarea
                onBlur={saveData}
                defaultValue={reason}
                name="accidentReason"
                className={`form-control ${errors.accidentReason ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Wypadek indywidualny</label>
            <input type="checkbox" name="individualAccident" onBlur={saveData} ref={register} defaultChecked={individual}/><br/><br/>

            <label className={"form-label-title"}>Wypadek zbiorowy</label>
            <input type="checkbox" name="collectiveAccident" onBlur={saveData} ref={register} defaultChecked={collective}/><br/><br/>

            <label className={"form-label-title"}>Wypadek śmiertelny</label>
            <input type="checkbox" name="fatalAccident" onBlur={saveData} ref={register} defaultChecked={fatal}/><br/><br/>

            <label className={"form-label-title"}>Wypadek poważny</label>
            <input type="checkbox" name="seriousAccident" onBlur={saveData} ref={register} defaultChecked={serious}/><br/><br/>

            <label className={"form-label-title"}>Wypadek powodujący niezdolność do pracy</label>
            <input type="checkbox" name="workAbsence" onBlur={saveData} ref={register} defaultChecked={absence}/><br/><br/>
        </div>
    );
}

export default AccidentTypes;
