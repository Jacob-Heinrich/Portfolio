import React from 'react';
import { HeroContainer,HeroBg, HeroContent } from './HeroElements.js';
import fish from '../../videos/fish.mp4';


function Hero(){
  return(
    <>
    <HeroContainer id="home">
      <HeroBg>
      </HeroBg>
      <HeroContent>
      <h1>Welcome to my portfolio!</h1>
      </HeroContent>
    </HeroContainer>
    </>
  )
}

export default Hero;
