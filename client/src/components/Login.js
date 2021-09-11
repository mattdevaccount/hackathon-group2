import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";


function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const clickHandler= () => {

        const data = {
            username,
            password
        };

        return (
            <div className="LoginPage">
                <h2>Login</h2>
            </div>
        )

    }
}

export default Login;