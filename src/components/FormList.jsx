import React, {useEffect} from "react";

const FormList = () => {

    useEffect(() => {
        document.title = 'Dostępne formularze';
    }, [])

    return (
        <div>Forms</div>
    );
}

export default FormList;
