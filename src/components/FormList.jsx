import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

const FormList = () => {

    useEffect(() => {
        document.title = 'Dostępne formularze';
    }, [])

    return (
        <div className={"container"}>
            <NavLink to={"/protokol-wypadku"} className="nav-link text-info">
                <h1 className={"text-center"}>Formularz protokołu wypadku</h1>
            </NavLink>


            <h1 className={"text-center"}>Formularz 2</h1>

            <h1 className={"text-center"}>Formularz 3</h1>
        </div>
    );
}

export default FormList;
