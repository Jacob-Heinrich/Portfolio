import React from 'react';
import { TechnologyContainer, TechnologyWrapper, TechnologyRow, Column1, Column2, TextWrapper, TopLine, Subtitle} from './TechnologyElements';
import '../../App.css';

function Technology(){
  return(
    <>
    <TechnologyContainer id = "technology">
      <TechnologyWrapper>
      <TextWrapper>
        <TopLine>Technologies</TopLine>
      </TextWrapper>
        <TechnologyRow>
          <Column1>
            <Subtitle>
            <p className="techItems">Python</p>
            <p className="techItems">C++</p>
            <p className="techItems">Javascript</p>
            <p className="techItems">MongoDB</p>
            <p className="techItems">HTML/CSS</p>
            </Subtitle>
          </Column1>
          <Column2>
            <Subtitle>
            <p className="techItems">Express</p>
            <p className="techItems">React</p>
            <p className="techItems">NodeJS</p>
            </Subtitle>
          </Column2>
        </TechnologyRow>
      </TechnologyWrapper>
    </TechnologyContainer>
    </>
  )
}

export default Technology;
