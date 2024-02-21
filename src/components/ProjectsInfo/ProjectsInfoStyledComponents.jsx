import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/styleConstants";

export const ProjectsInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: .2rem .5rem  ;
  color: ${primaryColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  

`;


export const WelcomeText = styled.div`
  transition: all 1s;
  opacity: 1;
  .title {
    font-size: 2rem;
    text-align: center;
  }
  .subtitle {
    &--separator {
      border: 1px solid ${primaryColor};
      border-radius: 999rem;
      box-shadow: 0 0 .9rem .1rem ${secondaryColor};
    }
    font-size: 1rem;
  };

  &.welcomeText__fade-out {
    opacity: 0;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;





