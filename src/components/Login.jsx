import React, {useEffect} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    useEffect(() => {
        document.title = 'Logowanie';
    }, [])

    return (
        <div className={"container"}>
            <h1 className="text-center">Zaloguj</h1>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Pole wymagane';
                    }
                    if (!values.password) {
                        errors.password = "Pole wymagane";
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="inputEmail">E-mail</label>
                            <Field type="text" name="email" className="form-control" id="inputEmail"
                                   aria-describedby="emailHelp"/>
                            <ErrorMessage id="emailHelp" name="email" component="div"
                                          className="form-text text-muted text-center"/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Hasło</label>
                            <Field type="password" name="password" className="form-control" id="inputPassword"
                                   aria-describedby="passwordHelp"/>
                            <ErrorMessage id="passwordHelp" name="password" component="div"
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

export default Login;

