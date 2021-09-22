import React from "react";

import profile from "./assets/Profile-Socks.jpg";
import "./profile.css";
import Stats from "./Profile/stats.js";
import Button from "./Profile/button.js";
import Footer from './Profile/Footer.js'

function PetProfile() {
  return (
    <div className='profileBody'>
     <Navbar />
      <main>
        <img className="Profile" src={profile} alt="Socks" />
        <Stats />
      </main>
      <p>
        {" "}
        <Button />
      </p>
      <article>
        <h2>Health</h2>
        <p>
          Neuteured and up to date with FVRCP and rabies vaccinations. No
          medications needed.
        </p>
        <p>I am not a special needs pet.</p>
      </article>
      <article>
        <h2>About Me</h2>
        <p>
          I was transferred in from another shelter. I am now currently at the
          Toronto Humane Society My foster parents say that I am a little purr
          machine. As soon as you walk in the room I starts to purr. I will come
          to you for cuddle time and will sit on your lap for attention. I am
          very active and curious and climb the dresser using the drawers as
          steps. Such a smart kitten! I will also climb people when I want
          attention. I get along with both my siblings, Simon & Daphne and would
          love to be adopted with one of them (not mandatory of course). I am
          not good with dogs. I love other cats. I am good with kids.{" "}
        </p>
      </article>

      <Footer />
    </div>
  );
}

export default PetProfile;
