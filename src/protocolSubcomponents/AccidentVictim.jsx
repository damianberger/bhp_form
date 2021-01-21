import React from "react";
import {useForm} from "react-hook-form";

const AccidentVictim = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {

    };

    return (
        <div className={"form-container"}>
            <h1 className="text-center">Krok 6 (accident victims)</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">
                    <label className={"form-label-title"}>Imię</label>
                    {errors.name && <label className="text-danger"> {errors.name.message} </label>}
                    <input
                        name="name"
                        type="text"
                        className={`form-control ${errors.name ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Nazwisko</label>
                    {errors.surname && <label className="text-danger"> {errors.surname.message} </label>}
                    <input
                        name="surname"
                        type="text"
                        className={`form-control ${errors.surname ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Data urodzenia</label>
                    {errors.birthDate && <label className="text-danger"> {errors.birthDate.message} </label>}
                    <input
                        name="birthDate"
                        type="date"
                        className={`form-control ${errors.birthDate ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Kod pocztowy</label>
                    {errors.postCode && <label className="text-danger"> {errors.postCode.message} </label>}
                    <input
                        name="postCode"
                        type="text"
                        className={`form-control ${errors.postCode ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Miasto</label>
                    {errors.city && <label className="text-danger"> {errors.city.message} </label>}
                    <input
                        name="city"
                        type="text"
                        className={`form-control ${errors.city ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Ulica</label>
                    {errors.street && <label className="text-danger"> {errors.street.message} </label>}
                    <input
                        name="street"
                        type="text"
                        className={`form-control ${errors.street ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Numer budynku</label>
                    {errors.houseNumber && <label className="text-danger"> {errors.houseNumber.message} </label>}
                    <input
                        name="houseNumber"
                        type="number"
                        className={`form-control ${errors.houseNumber ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Numer mieszkania</label>
                    {errors.apartmentNumber && <label className="text-danger"> {errors.apartmentNumber.message} </label>}
                    <input
                        name="apartmentNumber"
                        type="number"
                        className={`form-control ${errors.apartmentNumber ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>PESEL</label>
                    {errors.peselNumber && <label className="text-danger"> {errors.peselNumber.message} </label>}
                    <input
                        name="peselNumber"
                        type="text"
                        className={`form-control ${errors.peselNumber ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Numer dowodu osobistego</label>
                    {errors.identificationDocumentNumber && <label className="text-danger"> {errors.identificationDocumentNumber.message} </label>}
                    <input
                        name="identificationDocumentNumber"
                        type="text"
                        className={`form-control ${errors.identificationDocumentNumber ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />




                    <label className={"form-label-title"}>Dział</label>
                    {errors.workDepartment && <label className="text-danger"> {errors.workDepartment.message} </label>}
                    <input
                        name="workDepartment"
                        type="text"
                        className={`form-control ${errors.workDepartment ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Miejsce pracy</label>
                    {errors.workplace && <label className="text-danger"> {errors.workplace.message} </label>}
                    <input
                        name="workplace"
                        type="text"
                        className={`form-control ${errors.workplace ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Numer zawodu</label>
                    {errors.professionCode && <label className="text-danger"> {errors.professionCode.message} </label>}
                    <input
                        name="workplace"
                        type="text"
                        className={`form-control ${errors.professionCode ? "border-danger" : ""}`}
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

export default AccidentVictim;
