import styled, { keyframes } from "styled-components";

export default function TechnologyComponent({tech}) {
  return (
    <Container className="technologies-section__technology" floatingDelay={Math.random()*2}>
      <a href={tech.technologyLink} target="_blank" rel="noreferrer">
        <img src={tech.svgUrl} alt={tech.name} />
        <p>{tech.name}</p>
      </a>
    </Container>
  );
  
};

const floating = keyframes`
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-.2rem);
  }
`;


const Container = styled.li`
  animation: ${floating} 2s infinite;
  animation-delay: ${props=>props.floatingDelay}s;
`;
