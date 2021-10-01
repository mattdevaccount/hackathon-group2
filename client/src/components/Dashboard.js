import React from 'react';
import Navbar from './Navbar';
import ProfilePic from './images/blank-profile-picture.png';


function Dashboard() {
    return (
        <div className="WelcomePage">
            <div className="WelcomeHeader">
                <h2>Hello! Welcome to your account dashboard.</h2>
            </div>

            <div className="LeftPanel">
                <p>Dashboard</p>
                <p>Postings</p>
                <p>Manage Account</p>
            </div>

            <hr />

            <div className="WelcomeDash">
                <img src={ProfilePic} className="ProfilePic"></img>
                <h3>Rachel Brewer</h3>
                <p>Jen's Cat Cafe</p>
            </div>

            <div className="PetDash">
                <div>
                    <p>Active Posts:</p>
                    <h2>22</h2>
                </div>

                <div>
                    <p>Pets on Hold:</p>
                    <h2>4</h2>
                </div>

                <div>
                    <p>Pets Adopted:</p>
                    <h2>7</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;