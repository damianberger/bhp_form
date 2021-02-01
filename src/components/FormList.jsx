import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {clearProtocol, getTheProtocol} from "../actions/protocol";
import {useHistory} from "react-router";
import {getDataSummary} from "../actions/dataSummary";

const FormList = () => {
    let {unfinishedProtocols: protocols} = useSelector((state) => state.activeProtocols.dataSummary)

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        document.title = 'Dostępne formularze';
        dispatch(getDataSummary());
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
            <h3 onClick={() => handleClearForm()} className="nav-link text-info text-center">Formularz ustalenia
                przyczyn
                wypadku</h3>
            <h1 className={"text-center"}>Aktywne formularze: </h1>

            <table className="table table-responsive">
                <thead className="d-flex">
                    <th className="col-3">Nr</th>
                    <th className="col-3">Date1</th>
                    <th className="col-3">Date2</th>
                    <th className="col-3">Vfn</th>
                </thead>
                <tbody>
                {protocols && protocols.map((e, index) =>
                    <tr key={index} onClick={() => selectForm(e.protocolNumber)}>
                        <th>{e.unfinishedProtocolNumber}</th>
                        <td>{e.accidentDate}</td>
                        <td>{e.reportedDate}</td>
                        <td>{e.victimFullName}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default FormList;
