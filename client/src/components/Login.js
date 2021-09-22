import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import { Button, Box } from '@material-ui/core/';


function Login() {


    return (
        <div className="LoginPage">

            <Box className="LoginBox">
                <h2>New Tails</h2>
                <p>Welcome Back!</p>
                <form>
                    <div className="EmailTitle">
                        <p>Email</p>
                        <div className="EmailForm">
                            <input className="email" component="input" type="text"/>
                        </div>
                    </div>

                    <div className="PasswordTitle">
                        <p>Password</p>
                        <input className="password" component="input" type="text"/>
                    </div>

                    <button className="LoginButton" variant="contained">Login</button>
                </form>
            </Box>
        </div>
    )
}

export default Login;