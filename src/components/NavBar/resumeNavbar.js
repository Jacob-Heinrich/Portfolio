import React from 'react';
import '../../App.css';
import { Nav, NavbarContainer, NavLogo} from './NavBarElements';
import { FaBars } from 'react-icons/fa';
import Resume from '../../images/Resume.pdf';
import ResumeJPG from '../../images/Resume.jpg';

function ResumeNavbar(){
  return(
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo to="/" className = "homeLink">Home</NavLogo>
    <a href = {Resume} className="resDownload">Download PDF Version</a>
    </NavbarContainer>
    </Nav>
    </>
  )
}

export default ResumeNavbar;
