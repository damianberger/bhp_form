import React from "react";
import {useForm} from "react-hook-form";

const AccidentInvestigators = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {

    };

    return (
        <div className={"form-container"}>
            <h1 className="text-center">Krok 4 (accident investigators)</h1>
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

                    <label className={"form-label-title"}>Stanowisko</label>
                    {errors.username && <label className="text-danger"> {errors.username.message} </label>}
                    <input
                        name="username"
                        type="text"
                        className={`form-control ${errors.username ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Email</label>
                    {errors.username && <label className="text-danger"> {errors.username.message} </label>}
                    <input
                        name="username"
                        type="text"
                        className={`form-control ${errors.username ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Nazwa firmy</label>
                    {errors.companyName && <label className="text-danger"> {errors.companyName.message} </label>}
                    <input
                        name="companyName"
                        type="text"
                        className={`form-control ${errors.companyName ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                        })}
                    />

                    <label className={"form-label-title"}>Adres firmy</label>
                    {errors.street && <label className="text-danger"> {errors.street.message} </label>}
                    <input
                        name="street"
                        type="text"
                        className={`form-control ${errors.street ? "border-danger" : ""}`}
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

                    <label className={"form-label-title"}>Kod pocztowy</label>
                    {errors.postalCode && <label className="text-danger"> {errors.postalCode.message} </label>}
                    <input
                        name="postalCode"
                        type="text"
                        className={`form-control ${errors.postalCode ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                            pattern: {
                                value: /[0-9]{2}-[0-9]{3}/i,
                                message: "Poprawny format kodu pocztowego: ##-###"
                            }
                        })}
                    />

                    <label className={"form-label-title"}>NIP</label>
                    {errors.taxIdentificationNumber &&
                    <label className="text-danger"> {errors.taxIdentificationNumber.message} </label>}
                    <input
                        name="taxIdentificationNumber"
                        type="text"
                        className={`form-control ${errors.taxIdentificationNumber ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                            pattern: {
                                value: /^[0-9]{10}$/i,
                                message: "NIP powinien się składać z 10 cyfr."
                            }
                        })}
                    />

                    <label className={"form-label-title"}>Numer PKD</label>
                    {errors.pkdNumber && <label className="text-danger"> {errors.pkdNumber.message} </label>}
                    <input
                        name="pkdNumber"
                        type="text"
                        className={`form-control ${errors.pkdNumber ? "border-danger" : ""}`}
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

export default AccidentInvestigators;
