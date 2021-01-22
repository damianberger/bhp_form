import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setInvestigators} from "../actions/protocol";

const AccidentInvestigators = () => {
    const {register, errors, control, reset} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {accidentProtocolInvestigators: investigators} = useSelector((state) => state.protocol)

    let accidentProtocolInvestigators = investigators;

    const name = useWatch({control, name: 'name',});
    const surname = useWatch({control, name: 'surname',});
    const workPosition = useWatch({control, name: 'workPosition',});
    const companyName = useWatch({control, name: 'companyName',});
    const street = useWatch({control, name: 'street',});
    const city = useWatch({control, name: 'city',});
    const postalCode = useWatch({control, name: 'postalCode',});
    const taxIdentificationNumber = useWatch({control, name: 'taxIdentificationNumber',});
    const pkdNumber = useWatch({control, name: 'pkdNumber',});

    let member = {
        name,
        surname,
        workPosition,
        "companyDto": {
            companyName,
            street,
            city,
            postalCode,
            taxIdentificationNumber,
            pkdNumber
        }
    }


    const addMember = () => {
        accidentProtocolInvestigators.push(member)
        reset();
        dispatch(setInvestigators({accidentProtocolInvestigators}));
    }

    const removeMember = (index) => {
        accidentProtocolInvestigators.splice(index, 1);
        dispatch(setInvestigators({accidentProtocolInvestigators}));
    }

    return (
        <div className={"form-container"}>
            <h2 className="text-center">2. Zespół powypadkowy</h2>
            <form onSubmit={e => e.preventDefault()}>
                <div className="container">
                    <label className={"form-label-title"}>Imię</label>
                    {errors.name && <label className="text-danger"> {errors.name.message} </label>}
                    <input
                        name="name"
                        type="text"
                        className={`form-control ${errors.name ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Nazwisko</label>
                    {errors.surname && <label className="text-danger"> {errors.surname.message} </label>}
                    <input
                        name="surname"
                        type="text"
                        className={`form-control ${errors.surname ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Stanowisko</label>
                    {errors.workPosition && <label className="text-danger"> {errors.workPosition.message} </label>}
                    <input
                        name="workPosition"
                        type="text"
                        className={`form-control ${errors.workPosition ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Nazwa firmy</label>
                    {errors.companyName && <label className="text-danger"> {errors.companyName.message} </label>}
                    <input
                        name="companyName"
                        type="text"
                        className={`form-control ${errors.companyName ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Adres firmy</label>
                    {errors.street && <label className="text-danger"> {errors.street.message} </label>}
                    <input
                        name="street"
                        type="text"
                        className={`form-control ${errors.street ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Miasto</label>
                    {errors.city && <label className="text-danger"> {errors.city.message} </label>}
                    <input
                        name="city"
                        type="text"
                        className={`form-control ${errors.city ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Kod pocztowy</label>
                    {errors.postalCode && <label className="text-danger"> {errors.postalCode.message} </label>}
                    <input
                        name="postalCode"
                        type="text"
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
                        name="taxIdentificationNumber"
                        type="number"
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
                        name="pkdNumber"
                        type="text"
                        className={`form-control ${errors.pkdNumber ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <ol>
                        {accidentProtocolInvestigators.length > 0 && accidentProtocolInvestigators.map((item, index) =>{
                            return <li key={index}>{item.name} - {item.surname} - {item.workPosition} - {item.companyDto.companyName} <button className="btn-light" onClick={() => removeMember(index)}>Usuń z listy</button></li>
                        })
                        }
                    </ol>

                    <button className="btn-light" onClick={addMember} type="button">
                       Zapisz i/lub dodaj kolejną osobę.
                    </button>

                    <br/>
                    <br/>

                    <button className="btn-light" type="button">
                        <NavLink
                            className="nav-link text-info" to={"/protokol-wypadku/krok-1"}
                        >Wstecz</NavLink>
                    </button>

                    <button className="float-right btn-light" type="button">
                        <NavLink className={"nav-link text-info"}
                                 to={"/protokol-wypadku/krok-3"}>Dalej</NavLink>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AccidentInvestigators;
