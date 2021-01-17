import React, {useEffect} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterWorker = () => {

    useEffect(() => {
        document.title = 'Rejestracja pracownika';
    }, [])

    return (
        <div className={"container"}>
            <h1 className="text-center">Rejestracja pracownika</h1>
            <Formik
                initialValues={{email: '', password: '', confirmPassword: ''}}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Pole wymagane.';
                    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        errors.email = 'Niepoprawny email.';
                    }

                    if (!values.password) {
                        errors.password = "Pole wymagane.";
                    } else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)){
                        errors.password = 'Hasło musi mieć przynajmniej 8 znaków, zawierać jedną cyfrę oraz znak specjalny.';
                    }

                    if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = "Hasła nie są identyczne.";
                    }
                    return errors;

                }}
                onSubmit={(values, {setSubmitting}) => {
                    let credentials = {
                        email: values.email,
                        password: values.password
                    }
                    setTimeout(() => {
                        alert(JSON.stringify(credentials, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="inputEmail">e-mail</label>
                            <Field type="email" name="email" className="form-control" id="inputEmail"
                                   aria-describedby="emailHelp"/>
                            <ErrorMessage id="emailHelp" name="email" component="div"
                                          className="form-text text-muted text-center"/>

                        </div>

                        <div className="form-group">
                            <label htmlFor="inputEmail">hasło</label>
                            <Field type="password" name="password" className="form-control" id="inputPassword"
                                   aria-describedby="passwordHelp"/>
                            <ErrorMessage id="passwordHelp" name="password" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputEmail">Potwierdź hasło</label>
                            <Field type="password" name="confirmPassword" className="form-control"
                                   id="inputConfirmPassword"
                                   aria-describedby="passwordConfirmHelp"/>
                            <ErrorMessage id="passwordConfirmHelp" name="confirmPassword" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="col text-center">
                            <button className={"btn btn-primary"} type="submit" disabled={isSubmitting}>Zaloguj</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterWorker;

