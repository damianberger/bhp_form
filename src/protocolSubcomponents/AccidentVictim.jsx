import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setVictims} from "../actions/protocol";

const AccidentInvestigators = () => {
    const {register, errors, control, reset} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {accidentProtocolVictims: victims} = useSelector((state) => state.protocol)

    let accidentProtocolVictims = victims;

    const name = useWatch({control, name: 'name',});
    const surname = useWatch({control, name: 'surname',});
    const birthDate = useWatch({control, name: 'birthDate',});
    const workDepartment = useWatch({control, name: 'workDepartment',});
    const workplace = useWatch({control, name: 'workplace',});
    const professionCode = useWatch({control, name: 'professionCode',});
    const postalCode = useWatch({control, name: 'postalCode',});
    const city = useWatch({control, name: 'city',});
    const street = useWatch({control, name: 'street',});
    const houseNumber = useWatch({control, name: 'houseNumber',});
    const apartmentNumber = useWatch({control, name: 'apartmentNumber',});
    const peselNumber = useWatch({control, name: 'peselNumber',});
    const identificationDocumentNumber = useWatch({control, name: 'identificationDocumentNumber',});


    let victim = {
        name,
        surname,
        birthDate,
        "addressDto": {
            postalCode,
            city,
            street,
            houseNumber,
            apartmentNumber,
            peselNumber,
            identificationDocumentNumber,
        },
        workDepartment,
        workplace,
        professionCode,
    }

    const addMember = () => {
        accidentProtocolVictims.push(victim)
        reset();
        dispatch(setVictims({accidentProtocolVictims}));
    }

    const removeMember = (index) => {
        accidentProtocolVictims.splice(index, 1);
        dispatch(setVictims({accidentProtocolVictims}));
    }

    return (
        <div className={"form-container"}>
            <h2 className="text-center">4. Ofiary wypadku</h2>
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

                    <label className={"form-label-title"}>Data urodzenia</label>
                    {errors.birthDate && <label className="text-danger"> {errors.birthDate.message} </label>}
                    <input
                        name="birthDate"
                        type="date"
                        className={`form-control ${errors.birthDate ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Dział pracy</label>
                    {errors.workDepartment && <label className="text-danger"> {errors.workDepartment.message} </label>}
                    <input
                        name="workDepartment"
                        type="text"
                        className={`form-control ${errors.workDepartment ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Miejsce pracy</label>
                    {errors.workplace && <label className="text-danger"> {errors.workplace.message} </label>}
                    <input
                        name="workplace"
                        type="text"
                        className={`form-control ${errors.workplace ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Numer zawodu</label>
                    {errors.professionCode && <label className="text-danger"> {errors.professionCode.message} </label>}
                    <input
                        name="professionCode"
                        type="text"
                        className={`form-control ${errors.professionCode ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <h3 className="text-center">Dane zamieszkania</h3>

                    <label className={"form-label-title"}>Kod pocztowy</label>
                    {errors.postalCode && <label className="text-danger"> {errors.postalCode.message} </label>}
                    <input
                        name="postalCode"
                        type="text"
                        className={`form-control ${errors.postalCode ? "border-danger" : ""}`}
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

                    <label className={"form-label-title"}>Adres firmy</label>
                    {errors.street && <label className="text-danger"> {errors.street.message} </label>}
                    <input
                        name="street"
                        type="text"
                        className={`form-control ${errors.street ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Numer budynku</label>
                    {errors.houseNumber && <label className="text-danger"> {errors.houseNumber.message} </label>}
                    <input
                        name="houseNumber"
                        type="number"
                        className={`form-control ${errors.houseNumber ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Numer apartamentu</label>
                    {errors.apartmentNumber && <label className="text-danger"> {errors.apartmentNumber.message} </label>}
                    <input
                        name="apartmentNumber"
                        type="number"
                        className={`form-control ${errors.apartmentNumber ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>PESEL</label>
                    {errors.pkdNumber && <label className="text-danger"> {errors.peselNumber.message} </label>}
                    <input
                        name="peselNumber"
                        type="text"
                        className={`form-control ${errors.peselNumber ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <label className={"form-label-title"}>Numer dowodu osobistego</label>
                    {errors.identificationDocumentNumber && <label className="text-danger"> {errors.identificationDocumentNumber.message} </label>}
                    <input
                        name="identificationDocumentNumber"
                        type="text"
                        className={`form-control ${errors.identificationDocumentNumber ? "border-danger" : ""}`}
                        ref={register}
                    />

                    <ol>
                        {accidentProtocolVictims.length > 0 && accidentProtocolVictims.map((item, index) =>{
                            return <li key={index}>{item.name} - {item.surname} - {item.birthDate} - {item.addressDto.companyName} <button className="btn-light" onClick={() => removeMember(index)}>Usuń z listy</button></li>
                        })
                        }
                    </ol>

                    <button className="btn-light" onClick={addMember} type="button">
                        Zapisz i/lub dodaj kolejną ofiarę wypadku.
                    </button>

                    <br/>
                    <br/>

                    <button className="btn-light" type="button">
                        <NavLink
                            className="nav-link text-info" to={"/protokol-wypadku/krok-3"}
                        >Wstecz</NavLink>
                    </button>

                    <button className="float-right btn-light" type="button">
                        <NavLink className={"nav-link text-info"}
                                 to={"/protokol-wypadku/krok-5"}>Dalej</NavLink>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AccidentInvestigators;
