import React, {useEffect} from "react";

const Help = () => {

    useEffect(() => {
        document.title = 'Help';
    }, [])

    return (
        <div>Help</div>
    );
}

export default Help;
