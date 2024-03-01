import React from 'react'
import { Link } from 'react-router-dom';
import women from '../assets/women.jpg';
import heroImg from '../assets/hero.png';
export default function WelcomePage ()  {
  return (
    <>
    <header id='outer'>
      <div id='inner'>
      <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
          </div>
      <img
        src={women}
        alt="A city skyline touched by sunlight"
        id="cloud-image"
         />
         {/* <img src={heroImg} alt="A superhero wearing a cape" id="hero-img" /> */}
      
    </header>
       
    </>
  )
}
