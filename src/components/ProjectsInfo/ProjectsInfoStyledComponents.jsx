import { keyframes } from "styled-components";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/styleConstants";

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const ProjectsInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  
  color: ${primaryColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  

`;

export const WelcomeText = styled.div`
  padding: .2rem .5rem  ;
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

  .projectsSwiper{
    box-sizing: border-box;
    background: #222;
    margin-top: .4rem;
    width: 95%;
    aspect-ratio: 1/1;

    border-radius: 1.5rem;
    animation: ${fadeIn} 1s;

    & .swiper-button-next, 
      .swiper-button-prev {
      color: ${primaryColor};
      text-shadow: 0 0 .5rem ${secondaryColor};
      &::after{
        font-size: 2rem;
      }
    } 

    & .swiper-pagination-bullet{
      background: white;
      &-active{
        background: ${secondaryColor};
      }
    }

    &--slide{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 1.5rem;
      overflow: hidden;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }


      & .projectsSwiper--title{
        color: ${secondaryColor};
        position: absolute;
        top: 0;
        z-index: 2;
        font-size: 1.1rem;
        border-radius: 1rem;
        padding: .2rem .5rem;
        background: rgba(34, 34, 34, 0.95);
      }

      img{
        position: absolute;
        width: 100%;
      }
    }
  }
`;





