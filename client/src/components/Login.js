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
                    <div>
                        <input name="email" component="input" type="text"/>
                    </div>

                    <div>
                        <input name="password" component="input" type="text"/>
                    </div>

                    <Button className="LoginButton" variant="contained">Login</Button>
                </form>
            </Box>
        </div>
    )
}

export default Login;