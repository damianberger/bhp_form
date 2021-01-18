import React, {useEffect} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterCompany = () => {

    useEffect(() => {
        document.title = 'Rejestracja firmy';
    }, [])

    return (
        <div className={"container"}>
            <h1 className="text-center">Rejestracja firmy</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    companyName: '',
                    street: '',
                    city: '',
                    postalCode: '',
                    taxIdentificationNumber: '',
                    pkdNumber: ''
                }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Pole wymagane.';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Niepoprawny email.';
                    }

                    if (!values.password) {
                        errors.password = "Pole wymagane.";
                    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)) {
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
                        password: values.password,
                        companyName: values.companyName,
                        street: values.street,
                        city: values.city,
                        postalCode: values.postalCode,
                        taxIdentificationNumber: values.taxIdentificationNumber,
                        pkdNumber: values
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
                            <label htmlFor="inputEmail">E-mail</label>
                            <Field type="email" name="email" className="form-control" id="inputEmail"
                                   aria-describedby="emailHelp"/>
                            <ErrorMessage id="emailHelp" name="email" component="div"
                                          className="form-text text-muted text-center"/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Hasło</label>
                            <Field type="password" name="password" className="form-control" id="inputPassword"
                                   aria-describedby="passwordHelp"/>
                            <ErrorMessage id="passwordHelp" name="password" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputConfirmPassword">Potwierdź hasło</label>
                            <Field type="password" name="confirmPassword" className="form-control" id="inputConfirmPassword"
                                   aria-describedby="passwordConfirmHelp"/>
                            <ErrorMessage id="passwordConfirmHelp" name="confirmPassword" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputCompanyName">Nazwa firmy</label>
                            <Field type="text" name="companyName" className="form-control"
                                   id="inputCompanyName" aria-describedby="companyNameHelp"/>
                            <ErrorMessage id="companyNameHelp" name="companyName" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputStreet">Ulica</label>
                            <Field type="text" name="street" className="form-control" id="inputStreet"
                                   aria-describedby="streetHelp"/>
                            <ErrorMessage id="streetHelp" name="street" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputCity">Miasto</label>
                            <Field type="text" name="city" className="form-control"
                                   id="inputCity"
                                   aria-describedby="cityHelp"/>
                            <ErrorMessage id="cityHelp" name="city" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPostalCode">Kod pocztowy</label>
                            <Field type="text" name="postalCode" className="form-control"
                                   id="inputPostalCode"
                                   aria-describedby="postalCodeHelp"/>
                            <ErrorMessage id="postalCodeHelp" name="postalCode" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputTaxIdentificationNumber">Numer identyfikacji podatkowej</label>
                            <Field type="text" name="taxIdentificationNumber" className="form-control"
                                   id="inputTaxIdentificationNumber"
                                   aria-describedby="taxIdentificationNumberHelp"/>
                            <ErrorMessage id="taxIdentificationNumberHelp" name="taxIdentificationNumber" component="div"
                                          className="form-text text-muted text-center"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPkdNumber">Numer PKD</label>
                            <Field type="text" name="pkdNumber" className="form-control"
                                   id="inputPkdNumber"
                                   aria-describedby="pkdNumberHelp"/>
                            <ErrorMessage id="pkdNumberHelp" name="pkdNumber" component="div"
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

export default RegisterCompany;

