import React, {useEffect} from "react";

const FormList = () => {

    useEffect(() => {
        document.title = 'Form list';
    }, [])

    return (
        <div>Forms</div>
    );
}

export default FormList;
