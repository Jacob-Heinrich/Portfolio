import styled from 'styled-components';
import jellyFish from '../../images/jellyfish.jpg';
import img from '../../images/backgroundimg.jpg';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  background-image:url(${img});
  background-size:1450px 1250px;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index:1;
  overflow-x:hidden;

  @media screen and (max-width:768px){
    background-image:url(${jellyFish});
  }
`

export const HeroBg = styled.div`
  position:absolute;
  top: 0;
  right:0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow:hidden;
`


export const HeroContent = styled.div`
  color:white;
  position:relative;
  top:-7em;
  opacity:80%;
`
