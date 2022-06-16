import React, { useState } from 'react';
import '../App.css';
import SideBar from '../components/sidebar/index';
import NavBar from '../components/NavBar/navbar';
import HeroSection from '../components/HeroSection/index';
import About from '../components/About/index';
import Technology from '../components/Technology/index';
import { homeObjOne, homeObjTwo } from '../components/About/Data';


function Home(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return(
    <>
    <SideBar isOpen = {isOpen} toggle = {toggle} />
    <NavBar toggle = {toggle} />
    <HeroSection />
    <About {...homeObjOne} />
    <About {...homeObjTwo} />
    <Technology />
    </>
  )
}

export default Home;
