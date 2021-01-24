import React from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import SubmitProtocol from '../services/ProtocolService'

const Summary = () => {
    let {protocol} = useSelector((state) => state)

    console.log(JSON.stringify(protocol));
    const submitProtocol = () => {
        axios
            .post("http://localhost:8080/api/addAccident", protocol)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    return (
        <div className={"form-container"}>
            <h2 className="text-center">Podsumowanie</h2>
                <div className="container">


                    <button onClick={submitProtocol}>Wyślij protokół</button>
                </div>
        </div>
    );
}

export default Summary;
