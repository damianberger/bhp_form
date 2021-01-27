import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {clearProtocol, getTheProtocol} from "../actions/protocol";
import {useHistory} from "react-router";

const FormList = () => {
    let {unfinishedProtocols: protocols} = useSelector((state) => state.activeProtocols.dataSummary)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        document.title = 'Dostępne formularze';
    }, [])

    const handleClearForm = () => {
        dispatch(clearProtocol());
        history.push('/protokol-wypadku');
    }

    const selectForm = (number) => {
        dispatch(getTheProtocol(number))
        history.push('/protokol-wypadku');
    }


    return (
        <div className={"container"}>
            <h1 className={"text-center"}>Nowy:</h1>
            <h3 onClick={() => handleClearForm()} className="nav-link text-info text-center">Formularz ustalenia przyczyn
                wypadku</h3>
            <h1 className={"text-center"}>Aktywne formularze: </h1>
            <div className={"accidentList"}>
                {protocols.map((e, index) =>
                    <div className={"accidentMini"} key={index} onClick={() => selectForm(e.protocolNumber)}>
                        <p>number={e.protocolNumber}</p>
                        <p>name={e.name}</p>
                        <p>aDate={e.accidentDate}</p>
                        <p>rDate={e.reportedDate}</p>
                    </div>
                )}


            </div>


        </div>
    );
}

export default FormList;
