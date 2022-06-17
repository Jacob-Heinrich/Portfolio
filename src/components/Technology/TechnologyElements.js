import styled from 'styled-components';

export const TechnologyContainer = styled.div`
  background: ${({lightBg})=>(lightBg ? '#f9f9f9' : '#010606')};
  height: 30em;
  display:flex;
  align-self:center;
  position:relative;

  @media screen and (max-width:768px){
    padding: 100px 0;
  }
`

export const TechnologyWrapper = styled.div`
  display:grid;
  position:relative;
  top:8em;
  left:4.5em;
  z-index:1;
  height: 400px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const TechnologyRow = styled.div`
  display:grid;
  grid-auto-column: minmax(auto,1fr);
  align-items:center;
  grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  margin-bottom:15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom:15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  position:relative;
  text-align:center;
  margin-bottom:1em;
  color: #01bf71;
  font-size: 30px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: underline;

  @media screen and (max-width:900px){
    position:relative;
    bottom:10px;
  }
`

export const Subtitle = styled.p`
  position:relative;
  bottom:6em;
  right: .5em;
  margin-right:5em;
  max-width: 420px;
  font-size: 25px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
