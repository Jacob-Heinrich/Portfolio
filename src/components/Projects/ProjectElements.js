import styled from 'styled-components';
import background from '../../images/background.jpg';



export const ProjectsContainer = styled.div`
  background-image: url(${background});
  height:600px;

  @media screen and (max-width:768px){
    padding: 100px 0;
    background-image:none;
    background-color:black;
    margin-top:30em;
  }
`

export const ProjectsWrapper = styled.div`
  background-image:url({background});
  display:grid;
  position:relative;
  grid-template-column: 10px 10px 10px;
  grid-template-row: 5em;
  gap: 0 10px;
  height:400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  top:8em;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width:768px){
    grid-template-column:5em;
    grid-template-row:2em 2em 2em;
    background-color:black;
  }
`

export const Column1 = styled.div`
  z-index:1;
  background-color:black;
  position:relative;
  margin-bottom:15px;
  padding: 0 15px;
  grid-column: 1;
  border:4px solid;
  border-radius: 2em;
  max-height:18em;

  @media screen and (max-width:768px){
    grid-row:3;
    background-color:white;
  }

  transition: transform 500ms ease;

  &:hover{
    transform: scale(1.05);
    &::after{
      transform: scaleX(1);
    }
  }

  &::after{
    content: "";
    position:absolute;
    height:3px;
    left:0;
    top:50px;
    background-color:#01bf71;
    width: 78%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }

`

export const Column2 = styled.div`
z-index:1;
position:relative;
background-color:black;
margin-bottom:15px;
padding: 0 15px;
grid-column: 2;
border:4px solid;
border-radius: 2em;
max-height:18em;
width:17em;

@media screen and (max-width:768px){
  grid-row:1;
  grid-column:1;
  background-color:white;
}


transition: transform 500ms ease;

&:hover{
  transform: scale(1.05);
  &::after{
    transform: scaleX(1);
  }
}

&::after{
  content: "";
  position:absolute;
  height:3px;
  left:0px;
  top:50px;
  background-color:#01bf71;
  width: 85%;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms ease;
}
`

export const Column3 = styled.div`
z-index:1;
position:relative;
background-color:black;
margin-bottom:15px;
padding: 0 15px;
grid-column: 3;
border:4px solid;
border-radius: 2em;
max-height:18em;

@media screen and (max-width:768px){
  grid-row:2;
  grid-column:1;
  background-color:white;
}


transition: transform 500ms ease;

&:hover{
  transform: scale(1.05);
  &::after{
    transform: scaleX(1);
  }
}

&::after{
  content: "";
  position:absolute;
  height:3px;
  width: 68%;
  left:0px;
  top:50px;
  background-color:#01bf71;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms ease;
}
`

export const Column4 = styled.div`
z-index:999;
position:relative;
background-color:black;
margin-bottom:15px;
padding: 0 15px;
grid-column: 4;
border:4px solid;
border-radius: 2em;


transition: transform 500ms ease;

&:hover{
  transform: scale(1.05);
  opacity:100%;
  &::after{
    transform: scaleX(1);
  }
}

&::after{
  content: "";
  position:absolute;
  height:3px;
  width: 95%;
  left:0px;
  top:50px;
  background-color:#01bf71;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms ease-in-out;
}
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  &:hover{
    transform: translateY(0);
  }
`

export const TopLine = styled.h1`
  position:relative;
  left:20em;
  top:1em;
  color: #01bf71;
  text-decoration:underline;

  @media screen and (max-width:768px){
    left:3.5em;
    top:-2em;
    margin-bottom:-5em;
  }
`

export const Heading = styled.h1`
  color:white;
  margin-bottom: 24px;
  position:relative;
  top:1em;
  font-size: 25px;
  line-height: 1.1;
  font-weight:600;
  width: max-content;

  @media screen and (max-width:768px){
    font-size: 20px;
    color:black;
  }
`

export const Subtitle = styled.p`
  margin-top:2em;
  max-width: 200px;
  margin-bottom: 35px;
  font-size: 15px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

  @media screen and (max-width:768px){
    font-size:13px;
    color:black;
  }
`

export const Btn1 = styled.button`
  cursor: pointer;
  position:absolute;
  bottom:1em;
  left:1em;
  display:inline-block;
  text-decoration:none;
  background-color: white;
  padding: 0.5em 1.25em;
  border-radius: 5em;

  &:hover,
  &:focus{
    background-color:#01bf71;
  }
`

export const BtnTwo = styled.button`
  cursor: pointer;
  position:absolute;
  bottom:1em;
  right:1em;
  display:inline-block;
  text-decoration:none;
  background-color: white;
  padding: 0.5em 1.25em;
  border-radius:5em;

  &:hover,
  &:focus{
    background-color:#01bf71;
  }
`

export const BtnThree = styled.button`
  cursor: pointer;
  position: absolute;
  bottom:4em;
  left:10em;
  text-decoration:none;
  background-color: white;
  padding: 0.5em 1.25em;
  border-radius:5em;

  &:hover,
  &:focus{
    background-color:#01bf71;
  }
`
