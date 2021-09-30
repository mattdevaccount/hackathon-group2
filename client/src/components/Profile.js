import "./Profile/profile.css";
import React, { useState, useEffect } from "react";
import GetProfileData from "./Profile/ProfileData.js";
import Stats from "./Profile/stats.js";
import { Link } from "react-router-dom";

//not sure how your routes will connect the various cats, but I put the import statments in for the profile pics below, in case they are wanted for future use.  I hardcoded one cat into the array, for display, but I assume the rest of our non-existant cat objects would be in the JSON files...

// import SBandit from './images/Search-Bandit.jpg'
// import SFelix from './images/Search-Felix.jpg'
// import SGoopy from './images/Search-Goopy.jpg'
// import SJose from './images/Search-Jose.jpg'
// import SLumpy from './images/Search-Lumpy.jpg'
// import SPhil from './images/Search-Phil.jpg'
// import SPrince from './images/Search-Prince.jpg'
// import SSockes from './images/Search-Socks.jpg'
// import SSprinkles from './images/Search-Sprinkles.jpg'

function Profile(props) { 
  const ProfileData = GetProfileData();
  const [catProfile, setCatProfile] = useState([props.petPool]);
  const [catID, setCatID] = useState();


  const proptest = () => {
    console.log(props.petPool.breed)
  }

  return (
    <div className="profileBody">
      <div className="profileMain">
        <div className="ProfileLeft">
          <img
            className="Profile"
            src={ProfileData.ProfilePic}
            alt={ProfileData.Name}
          />
          <button onClick={proptest}><Link className='adoptButton' to="/contact">Adopt This Pet</Link></button>
        </div>

          <div className="Stats">
      <table>
        <tr>
          <th>{props.petPool[0].name}</th>
        </tr>
        <tr>
          <td className="bold">Breed:</td>
          <td className="StatsValues">{props.petPool[0].breed}</td>
        </tr>
        <tr>
          <td className="bold">Sex:</td>
          <td className="StatsValues">{props.petPool[0].sex}</td>
        </tr>
        <tr>
          <td className="bold">Age:</td>
          <td className="StatsValues">{props.petPool[0].age} years</td>
        </tr>
        <tr>
          <td className="bold">Colour:</td>
          <td className="StatsValues">{props.petPool[0].colour}</td>
        </tr>
        <tr>
          <td className="bold">Hair:</td>
          <td className="StatsValues">{props.petPool[0].hair}</td>
        </tr>
        <tr>
          <td className="bold">Pet ID:</td>
          <td className="StatsValues">{props.petPool[0].pet_uuid}</td>
        </tr>
        <tr>
          <td className="bold">Been in Shelter Since:</td>
          <td className="StatsValues">{props.petPool[0].date}</td>
        </tr>
      </table>
        </div>
      </div>
      <p></p>
      <article>
        <h2>Health</h2>
        <p>{ProfileData.HealthInfo}</p>
      </article>
      <article>
        <h2>About Me</h2>
        <p>{ProfileData.About}</p>
      </article>
    </div>
  );
}

export default Profile;