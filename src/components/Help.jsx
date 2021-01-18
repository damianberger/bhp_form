import React, {useEffect} from "react";

const Help = () => {

    useEffect(() => {
        document.title = 'Pomoc';
    }, [])

    return (
        <div>Help</div>
    );
}

export default Help;
