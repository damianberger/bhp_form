import React from "react";
import {useForm} from "react-hook-form";

const AccidentCause = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {

    };

    return (
        <div className={"form-container"}>
            <h1 className="text-center">Krok 2 (accident cause)</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">
                    <label className={"form-label-title"}>Przyczyna wypadku</label>
                    {errors.accidentCause && <label className="text-danger"> {errors.accidentCause.message} </label>}
                    <input
                        name="accidentCause"
                        type="text"
                        className={`form-control ${errors.accidentCause ? "border-danger" : ""}`}
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

export default AccidentCause;
