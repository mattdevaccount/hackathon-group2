import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';

import LargeDiagonal from "./images/HomePage_LargeDiagonal.png"
import SmallDiagonal from "./images/HomePage_SmallDiagonal.png"
import HeroPhoto from "./images/HomePageHeroPhoto.jpg"
import SliderSprinkles from "./images/SliderCatSprinkles.jpg"
import WomanAndCat from "./images/womanTalkingToCat.png"
import ManAndCat from "./images/ManHoldingCat.png"
import TwoCatsPlaying from "./images/TwoCatsPlaying.jpg"



export default function Landing() {

    return (

        <div>
            <section className="FirstContainer image-stack">
                <img className="LandingFirstImg" src={LargeDiagonal} alt="Large Dark Pink Diagonal" />
                <section className="WelcomeContent">
                <h2>Help give a senior cat a forever home.</h2>
                <h3>Find your new best friend.</h3>
                </section>
                <img className="LandingSecondImg" src={HeroPhoto} alt="Cat" />
                <section className="WelcomeContent">
                <button className="FindACatButton" variant="contained">Find a Cat <SearchIcon fontSize="medium"></SearchIcon></button>
                </section>
            </section>
            <section className="SecondContainer image-stack">
                <img className="CatSectionFirstImg" src={SmallDiagonal} alt="Small Light Pink Diagonal" />
                <section className="CatInfo">
                <h2 className="CatTag">Featured Pets</h2>
                <h2>Sprinkles</h2>
                <h3>10 years old <br></br>Been at shelter for: 31 days</h3>
                </section>
                <img className="CatSectionSecondImg" src={SliderSprinkles} alt="Sprinkles the Cat" />
            </section>
            <Grid container spacing={2}>
                <Grid className="container" item xs={6}>
                <img className="Article" src={WomanAndCat} alt="Woman face to face with Cat" />
                <h2 className="ArticleTitle">Why senior cats are great!</h2>
                </Grid>
                <Grid className="container"  item xs={6}>
                <img  className="Article" src={ManAndCat} alt="Smiling Man holding and petting Cat" />
                <h2 className="ArticleTitle">Are you ready to adopt?</h2>
                </Grid>
                <Grid className="container"  item xs={12}>
                <img className="missionStatementImage" src={TwoCatsPlaying} alt="Two Cates Playing with each other"></img>
                <h2 className="ArticleTitle">Our Mission</h2>
                <p className="missionStatement">Senior cats are often the last to be adopted. Many live out the rest of their lives in a shelter. New Tails help senior cats find a loving home to live out their golden years. </p>
                </Grid>
            </Grid>
        </div>
    )
}