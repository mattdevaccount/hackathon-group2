import React from "react";

import Button from "@material-ui/core/Button";
import { blue, orange, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";

import SocksPic from "./images/Profile-Socks.jpg";
import SocksPic2 from "./images/Profile-Socks2.jpg";
import SocksPic3 from "./images/Profile-Socks3.jpg";
import SocksPic4 from "./images/Profile-Socks4.jpg";
import SocksPic5 from "./images/Profile-Socks5.jpg";

export default function PetProfile() {
    const useStyles = makeStyles((theme) => ({
        root: {
          "& > *": {
            margin: theme.spacing(1),
            width: "37ch",
          },
        },
      }));
      
      const theme = createTheme({
        palette: {
          primary: blue
      }
      });

  return (
    <main className="profileBody">
      <section className="profile-topHalf">
        <img className="catProfilePic" src={SocksPic} alt="cat-profile-pic" />
        <section className="profileInfo">
          <div className="profileName">Socks</div>
          <div className="profileCategory">Breed:</div>
          <div className="profileCategory">Sex:</div>
          <div className="profileCategory">Age:</div>
          <div className="profileCategory">Colour:</div>
          <div className="profileCategory">Hair:</div>
          <div className="profileCategory">Pet ID:</div>
          <section className="smallImageRoll">
            <img className="smallPicsProfile" src={SocksPic2} alt="smallpic2" />
            <img className="smallPicsProfile" src={SocksPic3} alt="smallpic3" />
            <img className="smallPicsProfile" src={SocksPic4} alt="smallpic4" />
            <img className="smallPicsProfile" src={SocksPic5} alt="smallpic5" />
          </section>
        </section>
      </section>
      <Button variant="contained" className="adoptButton" color="primary" size="large">Adopt This Pet</Button>
    </main>
  );
}
