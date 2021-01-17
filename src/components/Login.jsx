import React, {useEffect} from "react";

const Login = () => {

    useEffect(() => {
        document.title = 'Login';
    }, [])

    return (
        <div>
            Login
        </div>
    );
}

export default Login;

