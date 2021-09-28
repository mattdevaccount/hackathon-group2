import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';


function Login() {

        return (
            <div className="LoginPage">
                <div className="LoginBox">
                    <h2>New Tails</h2>
                    <p>Welcome Back!</p>
                    <form>
                        <label>Email</label>
                        <div>
                            <Field name="email" component="input" type="text"/>
                        </div>

                        <label>Password</label>
                        <div>
                            <Field name="password" component="input" type="text"/>
                        </div>

                        <button className="LoginButton">Login</button>
                    </form>
                </div>

                <div className="PasswordTitle">
                    <p>Password</p>
                    <input className="password" component="input" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
                </div>

                <button className="LoginButton" variant="contained" onClick={clickHandler}>Login</button>
        </div>
    )
}

export default Login;