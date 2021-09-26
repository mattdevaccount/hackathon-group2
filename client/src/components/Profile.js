import React from "react";
import "./Profile/profile.css";
import GetProfileData from "./Profile/ProfileData.js";
import Stats from "./Profile/stats.js";
import Footer from "./Profile/Footer.js";
import Navbar from './Navebar.js'

//not sure how your routes will connect the various cats, but I put the import statments in for the profile pics below, in case they are wanted for future use.  I hardcoded one cat into the array, for display, but I assume the rest of our non-existant cat objects would be in the JSON files...

// import SBandit from './assets/Search-Bandit.jpg'
// import SFelix from './assets/Search-Felix.jpg'
// import SGoopy from './assets/Search-Goopy.jpg'
// import SJose from './assets/Search-Jose.jpg'
// import SLumpy from './assets/Search-Lumpy.jpg'
// import SPhil from './assets/Search-Phil.jpg'
// import SPrince from './assets/Search-Prince.jpg'
// import SSockes from './assets/Search-Socks.jpg'
// import SSprinkles from './assets/Search-Sprinkles.jpg'

function PetProfile() {
  const ProfileData = GetProfileData();

  return (
    <div className="profileBody">
      <Navbar />
      <main>
        <div className="ProfileLeft">
          <img
            className="Profile"
            src={ProfileData.ProfilePic}
            alt={ProfileData.Name}
          />
           <button>Adopt This Pet</button>
        </div>

        <div className="StatsContainer">
          <Stats />
        </div>
      </main>
      <p></p>
      <article>
        <h2>Health</h2>
        <p>{ProfileData.HealthInfo}</p>
      </article>
      <article>
        <h2>About Me</h2>
        <p>{ProfileData.About}</p>
      </article>

      <Footer />
    </div>
  );
}

export default PetProfile;
