import react from 'react';
import Spline from '@splinetool/react-spline';
import HomeNavbar from '../components/NavBar/homeNavbar';


function Model(){
  return(
    <>
    <HomeNavbar />
    <div className = "modelContainer">
    <div className = "modelOne">
    <Spline scene="https://prod.spline.design/qLEYPG1mjz0TumfA/scene.splinecode" />
    </div>
    </div>
    </>
  )
}

export default Model;
