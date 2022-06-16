import React from 'react';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './AboutElements';
import { homeObjOne } from './Data';

function About( {lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img} ){
  return(
    <>
    <AboutContainer lightBg = {lightBg} id = {id}>
      <AboutWrapper>
        <AboutRow imgStart = {imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText = {lightText}>{headline}</Heading>
              <Subtitle darkText = {darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap>
          <Img src={img} alt = "Picture" />
          </ImgWrap>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
    </>
  )
}

export default About;
