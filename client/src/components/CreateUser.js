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
                    <input className="CreatePassword" component="input" type="password"/>
                </div>

                <div className="NameInfo">
                    <div className="FirstName">
                        <p>First Name</p>
                        <input className="FirstName" component="input" type="text"/>
                    </div>

                    <div className="LastName">
                        <p>Last Name</p>
                        <input className="LastName" component="input" type="text"/>
                    </div>
                </div>

                <div className="Org">
                    <p>Organization Name</p>
                    <input className="OrgName" component="input" type="text"/>
                </div>

                <div className="OrgAddress">
                    <p>Organization Address</p>
                    <input className="OrgAddress" component="input" type="text" placeholder="Address"/>
                </div>

                <div className="OrgDetails">
                    <input className="OrgCity" component="input" type="text" placeholder="City"/>
                    <input className="OrgProvince" component="input" type="text" placeholder="Province"/>
                    <input className="OrgPostalCode" component="input" type="text" placeholder="Postal Code"/>
                </div>

                <button className="CreateButton" variant="contained">Create Account</button>
            </Box>
        </div>
    )
}


export default CreateUser