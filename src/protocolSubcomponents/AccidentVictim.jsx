import React from "react";
import {useForm, useWatch} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setVictim} from "../actions/protocol";

const AccidentInvestigators = () => {
    const {register, errors, control} = useForm({mode: 'all'});
    const dispatch = useDispatch();
    const {victimDto: victim} = useSelector((state) => state.protocol)

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

    let victimDto = {
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

    const saveData = () => {
        dispatch(setVictim({victimDto}));
    }

    return (
        <div className="container">
            <h2 className="text-center">4. Ofiara wypadku</h2>
            <label className={"form-label-title"}>Imię</label>
            {errors.name && <label className="text-danger"> {errors.name.message} </label>}
            <input
                onBlur={saveData}
                name="name"
                type="text"
                defaultValue={victim.name}
                className={`form-control ${errors.name ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Nazwisko</label>
            {errors.surname && <label className="text-danger"> {errors.surname.message} </label>}
            <input
                onBlur={saveData}
                name="surname"
                type="text"
                defaultValue={victim.surname}
                className={`form-control ${errors.surname ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Data urodzenia</label>
            {errors.birthDate && <label className="text-danger"> {errors.birthDate.message} </label>}
            <input
                onBlur={saveData}
                name="birthDate"
                type="date"
                defaultValue={victim.birthDate}
                className={`form-control ${errors.birthDate ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Dział pracy</label>
            {errors.workDepartment && <label className="text-danger"> {errors.workDepartment.message} </label>}
            <input
                onBlur={saveData}
                name="workDepartment"
                type="text"
                defaultValue={victim.workDepartment}
                className={`form-control ${errors.workDepartment ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Miejsce pracy</label>
            {errors.workplace && <label className="text-danger"> {errors.workplace.message} </label>}
            <input
                onBlur={saveData}
                name="workplace"
                type="text"
                defaultValue={victim.workplace}
                className={`form-control ${errors.workplace ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Numer zawodu</label>
            {errors.professionCode && <label className="text-danger"> {errors.professionCode.message} </label>}
            <input
                onBlur={saveData}
                name="professionCode"
                type="text"
                defaultValue={victim.professionCode}
                className={`form-control ${errors.professionCode ? "border-danger" : ""}`}
                ref={register}
            />

            <h3 className="text-center">Dane zamieszkania</h3>

            <label className={"form-label-title"}>Kod pocztowy</label>
            {errors.postalCode && <label className="text-danger"> {errors.postalCode.message} </label>}
            <input
                onBlur={saveData}
                name="postalCode"
                type="text"
                defaultValue={victim.addressDto.postalCode}
                className={`form-control ${errors.postalCode ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Miasto</label>
            {errors.city && <label className="text-danger"> {errors.city.message} </label>}
            <input
                onBlur={saveData}
                name="city"
                defaultValue={victim.addressDto.city}
                type="text"
                className={`form-control ${errors.city ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Ulica</label>
            {errors.street && <label className="text-danger"> {errors.street.message} </label>}
            <input
                onBlur={saveData}
                name="street"
                type="text"
                defaultValue={victim.addressDto.street}
                className={`form-control ${errors.street ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Numer budynku</label>
            {errors.houseNumber && <label className="text-danger"> {errors.houseNumber.message} </label>}
            <input
                onBlur={saveData}
                name="houseNumber"
                type="number"
                defaultValue={victim.addressDto.houseNumber}
                className={`form-control ${errors.houseNumber ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Numer apartamentu</label>
            {errors.apartmentNumber && <label className="text-danger"> {errors.apartmentNumber.message} </label>}
            <input
                onBlur={saveData}
                name="apartmentNumber"
                type="number"
                defaultValue={victim.addressDto.apartmentNumber}
                className={`form-control ${errors.apartmentNumber ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>PESEL</label>
            {errors.pkdNumber && <label className="text-danger"> {errors.peselNumber.message} </label>}
            <input
                onBlur={saveData}
                name="peselNumber"
                type="text"
                defaultValue={victim.addressDto.peselNumber}
                className={`form-control ${errors.peselNumber ? "border-danger" : ""}`}
                ref={register}
            />

            <label className={"form-label-title"}>Numer dowodu osobistego</label>
            {errors.identificationDocumentNumber &&
            <label className="text-danger"> {errors.identificationDocumentNumber.message} </label>}
            <input
                onBlur={saveData}
                name="identificationDocumentNumber"
                type="text"
                defaultValue={victim.addressDto.identificationDocumentNumber}
                className={`form-control ${errors.identificationDocumentNumber ? "border-danger" : ""}`}
                ref={register}
            />
        </div>
    );
}

export default AccidentInvestigators;
