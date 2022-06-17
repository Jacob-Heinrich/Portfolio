import React, { useState } from 'react';
import '../App.css';
import SideBar from '../components/sidebar/index';
import NavBar from '../components/NavBar/navbar';
import HeroSection from '../components/HeroSection/index';
import About from '../components/About/index';
import Technology from '../components/Technology/index';
import Projects from '../components/Projects/index';
import { homeObjOne, homeObjTwo } from '../components/About/Data';
import EmbeddedEmail from '../components/email';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { SiVisualstudiocode } from 'react-icons/si';


function Home(){

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sendMail = () => {
  const mailto: string =
    "mailto:jacob.heinrich09@gmail.com?subject=Test subject&body=Body content";
  window.location.href = mailto;
}


  return(
    <>
    <SideBar isOpen = {isOpen} toggle = {toggle} />
    <NavBar toggle = {toggle}/>
    <HeroSection />
    <About {...homeObjOne} />
    <Technology />
    <div className = "end">
    <Projects />
    <div className = "footer" id="contact">
    <EmbeddedEmail />
    </div>
    <div className = "contact">
    <a href="https://github.com/Jacob-Heinrich" target="_blank" rel="noopener noreferrer" className = "socialLink"><AiFillGithub className = "homeGit" size = "50px"/><p className = "homeGitText">GitHub</p></a>
    <a href="https://www.linkedin.com/in/jacob-heinrich149/" target="_blank" rel="noopener noreferrer" className = "socialLink"><BsLinkedin className = "homeLinked" size = "45px"/><p className = "linkedinText">LinkedIn</p></a>
    <p className = "emailText">
    jacob.heinrich09@gmail.com
    </p>
    <a href="mailto:jacob.heinrich09@gmail.com?body=My custom mail body" className = "mail">
    <AiOutlineMail className = "homeMail" size = "55px" />
    </a>
    <a href="https://leetcode.com/heinricjr/" target="_blank" rel="noopener noreferrer" className = "socialLink"><SiVisualstudiocode className = "leetcode" size = "50px"/><p className = "leetText">Leet Code</p></a>
    </div>
    </div>
    </>
  )
}

export default Home;
