import React, {useEffect} from "react";

const LandingPage = () => {

    useEffect(() => {
        document.title = 'BHP';
    }, [])

    return (
        <div>Landing</div>
    );
}

export default LandingPage;
