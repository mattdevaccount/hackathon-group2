import "./Profile/profile.css";
import GetProfileData from "./Profile/ProfileData.js";
import Stats from "./Profile/stats.js";
import Navbar from './Navbar.js'
import Header from "./images/Header.png";

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

function Profile() {
  const ProfileData = GetProfileData();

  return (
    <div className="profileBody">
      <div className="HeaderContainer">
        <div className="HeaderImg">
          {/* <img src={Header} /> */}
        </div>
      </div>

      <div className="profileMain">
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