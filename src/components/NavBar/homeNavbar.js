import React from 'react';
import '../../App.css';
import { Nav, NavbarContainer, NavLogo} from './NavBarElements';


function HomeNavbar(){
  return(
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo to="/" className = "homeLink">Home</NavLogo>
    </NavbarContainer>
    </Nav>
    </>
  )
}

export default HomeNavbar;
