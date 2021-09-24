import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box } from '@material-ui/core/';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const clickHandler= () => {
        console.log("hello")
        console.log(email, password)
    }

    // fetch("localhost:4000")

    return (
        <div className="LoginPage">
            <Box className="LoginBox">
                <h2>New Tails</h2>
                <p>Welcome Back!</p>
                <div className="EmailTitle">
                    <p>Email</p>
                    <div className="EmailForm">
                        <input className="email" component="input" type="text" onChange={(event) => {setEmail(event.target.value)}}/>
                    </div>
                </div>

                <div className="PasswordTitle">
                    <p>Password</p>
                    <input className="password" component="input" type="text" onChange={(event) => {setPassword(event.target.value)}}/>
                </div>

                <button className="LoginButton" variant="contained" onClick={clickHandler}>Login</button>
            </Box>
        </div>
    )
}

export default Login;