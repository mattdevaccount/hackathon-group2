import React, { useState } from "react";
import { Box } from '@material-ui/core/';


function CreateUser() {

    return(
        <div className="CreateUserPage">
            <Box className="CreateUserBox">
                <h2>New Tails</h2>
                <p>Welcome! Let's create your account.</p>

                <div className="CreateEmail">
                    <p>Email</p>
                    <div className="CreateEmailForm">
                        <input className="CreateEmail" component="input" type="text" font-size="50px"/>
                    </div>
                </div>

                <div className="CreatePassword">
                    <p>Password</p>
                    <input className="CreatePassword" component="input" type="text"/>
                </div>


            </Box>
        </div>
    )
}


export default CreateUser