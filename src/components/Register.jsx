import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {registerWorker} from '../actions/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router";

const Register = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const password = useRef({});
    const {message} = useSelector(state => state.message);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        document.title = 'Rejestracja';
    }, [])

    password.current = watch('password');

    const onSubmit = data => {
        let companyDto = {
            companyName: data.companyName,
            street: data.street,
            city: data.city,
            postalCode: data.postalCode,
            taxIdentificationNumber: data.taxIdentificationNumber,
            pkdNumber: data.pkdNumber
        }
        dispatch(registerWorker(data.username, data.password, companyDto))
            .then(() => {
                alert("Zarejestrowano. Prosze potwierdzić rejestracje poprzez Email");
                history.push("/logowanie");
            })
            .catch(() => {
                console.log(message);
            });
    };


    return (
        <div className={"form-container"}>
            <h1 className="text-center">Rejestracja</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">
                    <label className={"form-label-title"}>Email</label>
                    {errors.username && <label className="text-danger"> {errors.username.message} </label>}
                    <input
                        name="username"
                        type="text"
                        className={`form-control ${errors.username ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Niepoprawny format Email"
                            }
                        })}
                    />

                    <label className={"form-label-title"}>Hasło</label>
                    {errors.password && <label className="text-danger"> {errors.password.message} </label>}
                    <input
                        name="password"
                        type="password"
                        className={`form-control ${errors.password ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                                message: "Hasło powinno składać się z przynajmniej 8 znaków, zawierać jedną cyfrę oraz jeden znak specjalny."
                            }
                        })}
                    />

                    <label className={"form-label-title"}>Powtórz hasło</label>
                    {errors.password_repeat &&
                    <label className="text-danger"> {errors.password_repeat.message} </label>}
                    <input
                        name="password_repeat"
                        type="password"
                        className={`form-control ${errors.password_repeat ? "border-danger" : ""}`}
                        ref={register({
                            required: "Pole wymagane",
                            validate: value =>
                                value === password.current || "Hasła się nie zgadzają."
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


export default Register;
