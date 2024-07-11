import styled, { keyframes } from "styled-components";
import { primaryColor, secondaryColor } from "../../../constants/styleConstants";

export default function TechTag({tag, allTechnologies}) {
  const svgSrc = allTechnologies.find(tech => tech.name?.toLowerCase() === tag.toLowerCase())?.svgUrl;
  return (
    <Container className="currentProjectInfo__tech" $animationDelay={Math.random()*5}>
      <img src={
        !!svgSrc
          ? svgSrc
          : "/SVG/defaulTool.svg"
      } />
      <span>{tag}</span>
    </Container>
  );
};

const shiningBorder = keyframes`
  from { background-position: left; }
  to { background-position: right; }
`;

const Container = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  font-size: .7rem;
  padding: .3rem .5rem;
  margin: .2rem;  
  border-radius: 99rem;
  background: linear-gradient(to right,${primaryColor},${secondaryColor},${primaryColor},${primaryColor},${secondaryColor},${primaryColor});
  background-size: 250%;
  color: white;
  animation-delay: ${props => props.$animationDelay}s !important;
  animation: ${shiningBorder} 2s infinite ease-in-out;


  &::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% - 5px);
    height: calc(100% - 5px);
    background: ${secondaryColor}dd;
    border-radius: 999999rem;
    position: absolute;
  }
  *{
    position: relative;
    z-index: 2;
  }
  img{
    width: 1.5rem;
    height: 1.2rem;
    max-width: 1.5rem;
    max-height: 1.2rem;
  }
`;