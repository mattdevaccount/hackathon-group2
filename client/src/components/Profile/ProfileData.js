import {useState} from 'react'
import SocksPic from "../assets/Profile-Socks.jpg";
import S3 from "../assets/Profile-Socks3.jpg";
import S4 from "../assets/Profile-Socks4.jpg";
import S6 from "../assets/Search-Socks6.jpg";
import SS from "../assets/Search-Socks.jpg";


const GetProfileData = () => {
return (
            {
                ProfilePic: SocksPic,
                Name: 'Socks',
                Breed: 'Domestic Shorthair',
                Sex: 'Male',
                Age: 11,
                Colour: 'Black and White',
                Hair: 'Short',
                PetID: 90210,
                PrisonTerm: 'July 1, 2021',
                Thumb1: S3,
                Thumb2: S4,
                Thumb3: S6,
                Thumb4: SS,
                HealthInfo: 'Neuteured and up to date with FVRCP and rabies vaccinations. No medications needed. I am not a special needs pet.',
                About:'I was transferred in from another shelter. I am now currently at the Toronto Humane Society. My foster parents say that I am a little purr machine. As soon as you walk in the room I starts to purr. I will come to you for cuddle time and will sit on your lap for attention. I am very active and curious and climb the dresser using the drawers as steps. Such a smart kitten! I  will also climb people when I want attention. I  get along with both my siblings, Simon & Daphne and would love to be adopted with one of them (not mandatory of course).I am not good with dogs. I love other cats. I am good with kids. '
            }
               )       
}

export default GetProfileData
