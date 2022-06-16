import React from 'react';
import { ProjectsContainer, ProjectsWrapper, TopLine,Column1,Column2, Column3, Column4, TextWrapper, Heading, Subtitle, Btn1, BtnTwo} from './ProjectElements';
import { Link } from 'react-router-dom';

function Projects(){
  return(
    <>
    <ProjectsContainer>
    <TopLine>Projects</TopLine>
      <ProjectsWrapper>
          <Column1>
            <TextWrapper>
              <Heading>NASA APOD</Heading>
              <Subtitle>This is the subtitle</Subtitle>
            </TextWrapper>
            <Btn1>ProjectLink</Btn1>
            <BtnTwo>Code</BtnTwo>
          </Column1>
          <Column2>
          <TextWrapper>
            <Heading>Exercise Tracker</Heading>
            <Subtitle>This is the subtitle</Subtitle>
          </TextWrapper>
          <Btn1>Project Link</Btn1>
          <BtnTwo>Code</BtnTwo>
          </Column2>
          <Column3>
          <TextWrapper>
            <Heading>Assembly Language Sort</Heading>
            <Subtitle>This is the subtitle</Subtitle>
          </TextWrapper>
          <Btn1>ProjectLink</Btn1>
          <BtnTwo><a href="">Code</a></BtnTwo>
          </Column3>
          <Column4>
          <TextWrapper>
            <Heading>Assembly Language Sort</Heading>
            <Subtitle>This is the subtitle</Subtitle>
          </TextWrapper>
          <Btn1>ProjectLink</Btn1>
          <BtnTwo><a href="">Code</a></BtnTwo>
          </Column4>
      </ProjectsWrapper>
    </ProjectsContainer>
    </>
  )
}

export default Projects;
