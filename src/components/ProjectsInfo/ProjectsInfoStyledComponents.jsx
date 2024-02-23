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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .projectsSwiper{
    position: relative;
    width: 95%;
    aspect-ratio: 1/1;

    box-sizing: border-box;
    background: rgba(20, 20, 20, 1);
    margin-top: .4rem;

    border-radius: 1.5rem;
    animation: ${fadeIn} 1s;

    & .swiper-button-next, 
      .swiper-button-prev {

      opacity: .5;
      color: ${secondaryColor};
      &::after{
        box-shadow: 0 0 .5rem .1rem ${secondaryColor} inset;
        border-radius: .4rem;
        padding: .4rem;
        font-size: 2rem;
      }

      transition: all .2s ease-out;
      &:hover{
        opacity: 1;
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

      & .projectsSwiper--img{
        width: 100%;
        height: auto;
      }
      & .projectsSwiper--btn{
        position: absolute;
        bottom: 2.2rem;
        z-index: 2;
        border: none;
        border-top: ${primaryColor} .1rem solid;
        border-bottom: ${primaryColor} .1rem solid;

        border-radius: .2rem;
        padding: .2rem .7rem;
        background: rgba(20, 20, 20, .6);
        color: ${primaryColor};
        font-size: 1.1rem;

        cursor: pointer;
        transition: all .1s ease-out;
        &:hover{
          background: rgba(20, 20, 20, .8);
          box-shadow: 0 0 .5rem .1rem ${secondaryColor};
        }
      }
    }
  }
`;





