import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {setHeader} from "../actions/protocol";
import {NavLink} from "react-router-dom";


const AccidentHeader = () => {
    const {register, errors, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {protocolHeader: header} = useSelector((state) => state.protocol)

    const protocolNumber = useWatch({
        control,
        name: 'protocolNumber',
    });

    const companyName = useWatch({
        control,
        name: 'companyName',
    });

    const street = useWatch({
        control,
        name: 'street',
    });

    const city = useWatch({
        control,
        name: 'city',
    });

    const postalCode = useWatch({
        control,
        name: 'postalCode',
    });

    const taxIdentificationNumber = useWatch({
        control,
        name: 'taxIdentificationNumber',
    });

    const pkdNumber = useWatch({
        control,
        name: 'pkdNumber',
    });

    const companyDto = {
        companyName,
        street,
        city,
        postalCode,
        taxIdentificationNumber,
        pkdNumber
    }

    const saveData = () => {
        dispatch(setHeader({protocolNumber, companyDto}));
    }


    return (
        <div className={"form-container"}>
            <h2 className="text-center">1. Protokół ustalenia przyczyn wypadku</h2>
            <form>
                <div className="container">
                    <label className={"form-label-title"}>Numer protokołu</label>
                    {errors.protocolNumber && <label className="text-danger"> {errors.protocolNumber.message} </label>}
                    <input
                        onBlur={saveData}
                        name="protocolNumber"
                        type="text"
                        defaultValue={header.protocolNumber}
                        className={`form-control ${errors.protocolNumber ? "border-danger" : ""}`}
                        ref={register}
                    />


                    <h2 className="text-center">2. Dane pracodawcy</h2>

                    <label className={"form-label-title"}>Nazwa firmy</label>
                    {errors.companyName && <label className="text-danger"> {errors.companyName.message} </label>}
                    <input
                        onBlur={saveData}
                        name="companyName"
                        type="text"
                        defaultValue={header.companyDto.companyName}
                        className={`form-control ${errors.companyName ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Adres firmy</label>
                    {errors.street && <label className="text-danger"> {errors.street.message} </label>}
                    <input
                        onBlur={saveData}
                        name="street"
                        type="text"
                        defaultValue={header.companyDto.street}
                        className={`form-control ${errors.street ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Miasto</label>
                    {errors.city && <label className="text-danger"> {errors.city.message} </label>}
                    <input
                        onBlur={saveData}
                        name="city"
                        type="text"
                        defaultValue={header.companyDto.city}
                        className={`form-control ${errors.city ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Kod pocztowy</label>
                    {errors.postalCode && <label className="text-danger"> {errors.postalCode.message} </label>}
                    <input
                        onBlur={saveData}
                        name="postalCode"
                        type="text"
                        defaultValue={header.companyDto.postalCode}
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
                        defaultValue={header.companyDto.taxIdentificationNumber}
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
                        defaultValue={header.companyDto.pkdNumber}
                        className={`form-control ${errors.pkdNumber ? "border-danger" : ""}`}
                        ref={register({
                            pattern: {
                                value: /[0-9]{2}.[0-9]{2}.[zZ]/i,
                                message: "Poprawny format kodu PKD:   ##.##.Z"
                            }
                        })}
                    />

                    <button className="btn-light">
                        <NavLink
                            classname="nav-link text-info" to={"/protokol-wypadku"}
                        >Wstecz</NavLink>
                    </button>
                    <button className="float-right btn-light">
                        <NavLink classname={"nav-link text-info"}
                                 to={"/protokol-wypadku/krok-2"}>Dalej</NavLink>
                    </button>



                </div>
            </form>
        </div>
    );
}

export default AccidentHeader;
