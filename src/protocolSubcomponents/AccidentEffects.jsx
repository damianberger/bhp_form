import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setEffects} from "../actions/protocol";

const AccidentEffectsType = () => {
    const dispatch = useDispatch();
    const {register, errors, control, setValue} = useForm({mode: 'all'});

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

        </div>
    );
}
export default AccidentEffectsType;
