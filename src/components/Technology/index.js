import React from 'react';
import { TechnologyContainer, TechnologyWrapper, TechnologyRow, Column1, Column2, TextWrapper, TopLine, Subtitle} from './TechnologyElements';
import '../../App.css';

function Technology(){
  return(
    <>
    <TechnologyContainer id = "technology">
      <TechnologyWrapper>
      <TextWrapper>
      </TextWrapper>
        <TechnologyRow>
          <Column1>
            <Subtitle>
            <div className="front">
            <TopLine>Languages</TopLine>
            <p className="techItems" id = "react">Python</p>
            <p className="techItems" id = "javascript">Javascript</p>
            <p className="techItems" id = "html">HTML/CSS</p>
            <p className="techItems" id = "cPlus">C++</p>
            <p className="techItems" id = "sql">SQL</p>
            <p className="techItems" id = "c">C</p>
            </div>
            </Subtitle>
            <Subtitle>
            <div className = "back">
            <TopLine>Frameworks, Libraries, and DBMS</TopLine>
            <p className="techItems" id = "node">NodeJS</p>
            <p className="techItems" id = "express">Express</p>
            <p className="techItems" id = "react">ReactJS</p>
            <p className="techItems" id = "mySQL">MySQL</p>
            <p className="techItems" id = "mongoDB">MongoDB</p>
            </div>
            </Subtitle>
            <Subtitle>
            <div className="tools">
            <TopLine>Tools</TopLine>
            <p className="techItems" id = "git">Git</p>
            <p className="techItems" id = "vs">Unreal Engine</p>
            <p className="techItems" id = "trello">Jira</p>
            </div>
            </Subtitle>
          </Column1>
          <Column2>
          </Column2>
        </TechnologyRow>
      </TechnologyWrapper>
    </TechnologyContainer>
    </>
  )
}

export default Technology;
