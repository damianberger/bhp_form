import React from "react";
import {useForm} from "react-hook-form";

const AccidentEffects = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {

    };
    return (
        <div className={"form-container"}>
            <h1 className="text-center">Krok 3 (accident effects)</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">
                    <label className={"form-label-title"}>Konsekwencja wypadku</label>
                    {errors.accidentEffects && <label className="text-danger"> {errors.accidentEffects.message} </label>}
                    <input
                        name="accidentEffects"
                        type="text"
                        className={`form-control ${errors.accidentEffects ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <input type="submit" onClick={handleSubmit(onSubmit)}/>
                </div>
            </form>
        </div>
    );
}

export default AccidentEffects;
