import React from 'react';
import ResumeNavbar from '../components/NavBar/resumeNavbar';
import ResumeJPG from '../images/resume.jpg';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BiPlanet, BiDumbbell } from 'react-icons/bi';

function Resume(){
  return(
    <>
    <ResumeNavbar />
    <div className = "resumeContainer">
    <div className="res">
    <img src = { ResumeJPG } alt="resumePic" className="resImage"/>
    </div>
    <div className="links">
    <h1 className="linkHeader">Links</h1>
    <a href="https://github.com/Jacob-Heinrich" target="_blank" rel="noopener noreferrer" className = "socialLink"><AiFillGithub className = "aiFill" size = "100px"/><p>GitHub</p></a>
    <a href="https://www.linkedin.com/in/jacob-heinrich149/" target="_blank" rel="noopener noreferrer" className = "socialLink"><BsLinkedin className = "linkedin" size = "75px"/><p>LinkedIn</p></a>
    <a href="https://nasa-apod-alpha.vercel.app" target="_blank" rel="noopener noreferrer" className = "socialLink"><BiPlanet className = "nasa" size = "75px"/><p>NASA APOD</p></a>
    <a href="https://mern-workout-tracker.netlify.app/" target="_blank" rel="noopener noreferrer" className = "socialLink"><BiDumbbell className = "exercise" size = "75px"/><p>Exercise Tracker</p></a>
    </div>
    </div>
    </>
  )
}

export default Resume;
