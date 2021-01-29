import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setTypes, setEffects} from "../actions/protocol";

const AccidentEffectsType = () => {
    const {register, errors, control, setValue} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {accidentEffectsDto: effects} = useSelector((state) => state.protocol)

    let accidentEffectsDto = effects;
    let accidentEffect = useWatch({control, name: 'accidentEffect',});

    let effect = {
        accidentEffect: accidentEffect,
    }

    const addEffect = () => {
        if (accidentEffect) {
            accidentEffectsDto.push(effect)
        }
        setValue('accidentEffect', '');
        dispatch(setEffects({accidentEffectsDto}));
    }

    const removeEffect = (index) => {
        accidentEffectsDto.splice(index, 1);
        dispatch(setEffects({accidentEffectsDto}));
    }

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
            <h2 className="text-center">7. Konsekwencje wypadku</h2>
            <label className={"form-label-title"}>Konsekwencja wypadku</label>
            {errors.accidentEffects && <label className="text-danger"> {errors.accidentEffects.message} </label>}
            <input
                name="accidentEffect"
                type="text"
                className={`form-control ${errors.accidentEffects ? "border-danger" : ""}`}
                ref={register}
            />

            <ol>
                {accidentEffectsDto.length > 0 && accidentEffectsDto.map((item, index) => {
                    return <li key={index}>{item.accidentEffect}
                        <button className="btn-light" onClick={() => removeEffect(index)}>Usuń konsekwencje</button>
                    </li>
                })
                }
            </ol>

            <button className="btn-light" onClick={addEffect} type="button">
                Zapisz i/lub dodaj kolejną konsekwencję.
            </button>
            <br/><br/><br/>


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
            <input type="checkbox" name="workAbsence" onBlur={saveData} ref={register} defaultChecked={workAbsence}/><br/><br/>
        </div>
    );
}

export default AccidentEffectsType;
