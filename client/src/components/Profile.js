import "./Profile/profile.css";
import GetProfileData from "./Profile/ProfileData.js";
import Stats from "./Profile/stats.js";
import Footer from "./Profile/Footer.js";
import Navbar from './Navbar.js'
import Header from "./images/Header.png";

export default function Profile() {
    return (
      <div className="profileBody">
      <div className="HeaderContainer">
        <div className="HeaderImg">
          <img src={Header} />
        </div>
        <Navbar />
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

      <Footer />
    </div>
  );
}
