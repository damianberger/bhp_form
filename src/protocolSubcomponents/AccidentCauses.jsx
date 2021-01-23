import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {NavLink} from "react-router-dom";
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
        <div className={"form-container"}>
            <h2 className="text-center">6. Przyczyny wypadku</h2>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">

                    <label className={"form-label-title"}>Wypadek z winy pracodawcy</label><br/>
                    <select name="employerFault" ref={register} defaultValue={employerF} onBlur={saveData}>
                        <option value="TAK">TAK</option>
                        <option value="NIE">NIE</option>
                    </select><br/><br/>

                    <label className={"form-label-title"}>Wypadek z winy pracownika</label><br/>
                    <select name="employeeFault" ref={register} defaultValue={employeeF} onBlur={saveData}>
                        <option value="TAK">TAK</option>
                        <option value="NIE">NIE</option>
                    </select><br/><br/>

                    <label className={"form-label-title"}>Pracownik był w stanie nietrzeźwości lub pod wpływem środków odurzających</label><br/>
                    <select name="employeeIntoxication" ref={register} defaultValue={employeeI} onBlur={saveData}>
                        <option value="TAK">TAK</option>
                        <option value="NIE">NIE</option>
                    </select><br/><br/>


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

                    <br/>
                    <br/>

                    <button className="btn-light" type="button">
                        <NavLink
                            className="nav-link text-info" to={"/protokol-wypadku/krok-5"}
                        >Wstecz</NavLink>
                    </button>

                    <button className="float-right btn-light" type="button">
                        <NavLink className={"nav-link text-info"}
                                 to={"/protokol-wypadku/krok-7"}>Dalej</NavLink>
                    </button>
                </div>
            </form>
        </div>
);
}

export default AccidentCauses;
