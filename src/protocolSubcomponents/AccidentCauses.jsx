import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm, useWatch} from "react-hook-form";

import {setCauses, setFault} from "../actions/protocol";

const AccidentCauses = () => {
    const {register, errors, control, setValue} = useForm({mode: 'all'});
    const dispatch = useDispatch();

    const {accidentCausesDto: causes} = useSelector((state) => state.protocol)
    let accidentCausesDto = causes;
    let accidentCause = useWatch({control, name: 'accidentCause',});
    let cause = {
        accidentCause: accidentCause,
    }

    const addCause = () => {
        if (accidentCause) {
            accidentCausesDto.push(cause)
        }
        setValue('accidentCause', '');
        dispatch(setCauses({accidentCausesDto}));
    }

    const removeCause = (index) => {
        accidentCausesDto.splice(index, 1);
        dispatch(setCauses({accidentCausesDto}));
    }

    return (
        <div className="container">
            <h2 className="text-center">6. Przyczyny wypadku</h2>
            <label className={"form-label-title"}>Przyczyny wypadku</label>
            {errors.accidentCause && <label className="text-danger"> {errors.accidentCause.message} </label>}
            <input
                name="accidentCause"
                type="text"
                className={`form-control ${errors.accidentCause ? "border-danger" : ""}`}
                ref={register}
            />

            <ol>
                {accidentCausesDto.length > 0 && accidentCausesDto.map((item, index) => {
                    return <li key={index}>{item.accidentCause}
                        <button className="btn-light" onClick={() => removeCause(index)}>Usuń przyczynę</button>
                    </li>
                })
                }
            </ol>

            <button className="btn-light" onClick={addCause} type="button">
                Zapisz i/lub dodaj kolejną przyczynę.
            </button>
            <br/><br/><br/>
        </div>
    );
}

export default AccidentCauses;
