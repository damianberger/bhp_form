import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setCauses, setFault} from "../actions/protocol";

const AccidentCauses = () => {
    const {register, errors, control, setValue} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {accidentCausesDto: causes} = useSelector((state) => state.protocol)

    const {employerFault: employerF} = useSelector((state) => state.protocol)
    const {employeeFault: employeeF} = useSelector((state) => state.protocol)
    const {employeeIntoxication: employeeI} = useSelector((state) => state.protocol)

    let accidentCausesDto = causes;

    let accidentCause = useWatch({control, name: 'accidentCause',});

    let employerFault = useWatch({control, name: 'employerFault',});
    let employeeFault = useWatch({control, name: 'employeeFault',});
    let employeeIntoxication = useWatch({control, name: 'employeeIntoxication',});


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

    const saveData = () => {
        dispatch(setFault({employerFault, employeeFault, employeeIntoxication}));
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

export default AccidentCauses;
