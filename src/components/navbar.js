import React from 'react';
import '../App.css';
import { GiExplodingPlanet } from 'react-icons/gi';

function NavBar(){
  return(
    <>
    <div className="navigation">
    <GiExplodingPlanet size="50px" className="planet"/>
    </div>
    </>
  )
}

export default NavBar;
