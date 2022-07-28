import react from 'react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import FadeInOut from './FadeIn.js';
import '../../../App.css';

export default function Saturn(){
  const extraStyles = {
    position: "relative",
    bottom:"5em",
    left:"37em",
    background: "rgba(0, 0, 0, 0.4)",
    color: "white",
    width:"40em",
  };
  return(
    <>
    <div className = "saturn">
    <Spline scene="https://prod.spline.design/qLEYPG1mjz0TumfA/scene.splinecode" />
    <FadeInOut show = "show" duration={4000} style = {extraStyles} id = "welcome">
        Welcome to my portfolio!
      </FadeInOut>
    </div>
    </>
  )
}
