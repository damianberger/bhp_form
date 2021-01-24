import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {login} from '../actions/auth';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const password = useRef({});
    const {message} = useSelector(state => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Logowanie';
    }, [])

    password.current = watch('password');

    const onSubmit = data => {
        dispatch(login(data.username, data.password))
            .then(() => {
                alert("Zalogowano");
            })
            .catch(() => {
                console.log(message);
            });
    };


    return (
        <div className={"form-container"}>
            <h1 className="text-center">Logowanie</h1>
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
                        })}
                    />

                    <input type="submit" onClick={handleSubmit(onSubmit)}/>
                </div>
            </form>
        </div>
    );
}


export default Login;
