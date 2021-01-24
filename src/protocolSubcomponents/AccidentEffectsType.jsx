import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setTypes, setEffects, setCauses} from "../actions/protocol";

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

    const {accidentTypeDto: types} = useSelector((state) => state.protocol)
    const {accidentAtWork: atWork} = useSelector((state) => state.protocol)
    const {accidentReason: reason} = useSelector((state) => state.protocol)

    let accidentAtWork = useWatch({control, name: 'accidentAtWork',});
    let accidentReason = useWatch({control, name: 'accidentReason',});
    let acc1 = useWatch({control, name: 'acc1',});
    let acc2 = useWatch({control, name: 'acc2',});
    let acc3 = useWatch({control, name: 'acc3',});
    let acc4 = useWatch({control, name: 'acc4',});
    let acc5 = useWatch({control, name: 'acc5',});

    let accidentTypeDto = {
        acc1: acc1,
        acc2: acc2,
        acc3: acc3,
        acc4: acc4,
        acc5: acc5,
    }

    const saveData = () => {
        dispatch(setTypes({accidentAtWork, accidentReason, accidentTypeDto}));
    }

    return (
        <div className={"form-container"}>
            <h2 className="text-center">7. Konsekwencje wypadku</h2>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">

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
                    </button><br/><br/><br/>



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


                    <label className={"form-label-title"}>Typ wypadku 1</label>
                    <input type="checkbox" name="acc1" onBlur={saveData} ref={register} defaultChecked={types.acc1}/><br/><br/>

                    <label className={"form-label-title"}>Typ wypadku 2</label>
                    <input type="checkbox" name="acc2" onBlur={saveData} ref={register} defaultChecked={types.acc2}/><br/><br/>

                    <label className={"form-label-title"}>Typ wypadku 3</label>
                    <input type="checkbox" name="acc3" onBlur={saveData} ref={register} defaultChecked={types.acc3}/><br/><br/>

                    <label className={"form-label-title"}>Typ wypadku 4</label>
                    <input type="checkbox" name="acc4" onBlur={saveData} ref={register} defaultChecked={types.acc4}/><br/><br/>

                    <label className={"form-label-title"}>Typ wypadku 5</label>
                    <input type="checkbox" name="acc5" onBlur={saveData} ref={register} defaultChecked={types.acc5}/><br/><br/>

                    <button className="btn-light" type="button">
                        <NavLink
                            className="nav-link text-info" to={"/protokol-wypadku/krok-6"}
                        >Wstecz</NavLink>
                    </button>

                    <button className="float-right btn-light" type="button">
                        <NavLink className={"nav-link text-info"}
                                 to={"/protokol-wypadku/podsumowanie"}>Dalej</NavLink>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AccidentEffectsType;
