import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm, useWatch} from "react-hook-form";

import {setCompany} from "../actions/protocol";


const AccidentCompany = () => {
    const {register, errors, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();

    const {companyDto: company} = useSelector((state) => state.protocol)
    const companyName = useWatch({control, name: 'companyName',});
    const street = useWatch({control, name: 'street',});
    const city = useWatch({control, name: 'city',});
    const postalCode = useWatch({control, name: 'postalCode',});
    const taxIdentificationNumber = useWatch({control, name: 'taxIdentificationNumber',});
    const pkdNumber = useWatch({control, name: 'pkdNumber',});

    let companyDto = {
        companyName,
        street,
        city,
        postalCode,
        taxIdentificationNumber,
        pkdNumber
    }

    const saveData = () => {
        dispatch(setCompany({companyDto}));
    }

    return (
        <div className="container">
            <h2 className="text-center">1. Dane pracodawcy</h2>

            <label className={"form-label-title"}>Nazwa firmy</label>
            {errors.companyName && <label className="text-danger"> {errors.companyName.message} </label>}
            <input
                onBlur={saveData}
                name="companyName"
                type="text"
                defaultValue={company.companyName}
                className={`form-control ${errors.companyName ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Adres firmy</label>
            {errors.street && <label className="text-danger"> {errors.street.message} </label>}
            <input
                onBlur={saveData}
                name="street"
                type="text"
                defaultValue={company.street}
                className={`form-control ${errors.street ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Miasto</label>
            {errors.city && <label className="text-danger"> {errors.city.message} </label>}
            <input
                onBlur={saveData}
                name="city"
                type="text"
                defaultValue={company.city}
                className={`form-control ${errors.city ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Kod pocztowy</label>
            {errors.postalCode && <label className="text-danger"> {errors.postalCode.message} </label>}
            <input
                onBlur={saveData}
                name="postalCode"
                type="text"
                defaultValue={company.postalCode}
                className={`form-control ${errors.postalCode ? "border-danger" : ""}`}
                ref={register({
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
                onBlur={saveData}
                name="taxIdentificationNumber"
                type="number"
                defaultValue={company.taxIdentificationNumber}
                className={`form-control ${errors.taxIdentificationNumber ? "border-danger" : ""}`}
                ref={register({
                    pattern: {
                        value: /^[0-9]{10}$/i,
                        message: "NIP powinien się składać z 10 cyfr, bez myślników"
                    }
                })}
            />

            <label className={"form-label-title"}>Numer PKD</label>
            {errors.pkdNumber && <label className="text-danger"> {errors.pkdNumber.message} </label>}
            <input
                onBlur={saveData}
                name="pkdNumber"
                type="text"
                defaultValue={company.pkdNumber}
                className={`form-control ${errors.pkdNumber ? "border-danger" : ""}`}
                ref={register}
            />
        </div>
    );
}

export default AccidentCompany;
