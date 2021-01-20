import React, {useEffect} from "react";

const AccidentProtocolForm = () => {

    useEffect(() => {
        document.title = 'Protokół wypadku';
    }, [])

    return (
        <div className={"form-container"}>
            <h1 className="text-center">Protokół wypadku</h1>

        </div>

    );
}

export default AccidentProtocolForm;
