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
            <ul className="technologyListOne">
            <li className="techItems">Python</li>
            <li className="techItems">C++</li>
            <li className="techItems">Javascript</li>
            <li className="techItems">MongoDB</li>
            </ul>
            </Subtitle>
          </Column1>
          <Column2>
            <Subtitle>
            <ul className="technologyListOne">
            <li className="techItems">React</li>
            <li className="techItems">NodeJS</li>
            <li className="techItems">Express</li>
            </ul>
            </Subtitle>
          </Column2>
        </TechnologyRow>
      </TechnologyWrapper>
    </TechnologyContainer>
    </>
  )
}

export default Technology;
