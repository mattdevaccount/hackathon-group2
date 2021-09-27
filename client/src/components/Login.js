import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
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
=======
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';




function Login() {

    // const renderField = ({ input, label, type, meta: { touched, error } }) => (
    //     <div>
    //       <label>{label}</label>
    //       <div>
    //         <input {...input} placeholder={label} type={type}/>
    //         {touched && error && <span>{error}</span>}
    //       </div>
    //     </div>
    //   )

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
            </div>
        )
>>>>>>> 56457897958738297fbeb1816d935b794bd249e3
}

Login = reduxForm({
    form: 'loginForm'
})(Login)
export default Login;