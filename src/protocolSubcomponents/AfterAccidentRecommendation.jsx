import React from "react";
import {useForm} from "react-hook-form";

const AccidentAccidentRecommendation = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {

    };

    return (
        <div className={"form-container"}>
            <h1 className="text-center">Krok 7 (after accident recommendation)</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">
                    <label className={"form-label-title"}>Zalecenie</label>
                    {errors.recommendation && <label className="text-danger"> {errors.recommendation.message} </label>}
                    <input
                        name="recommendation"
                        type="text"
                        className={`form-control ${errors.recommendation ? "border-danger" : ""}`}
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

export default AccidentAccidentRecommendation;
