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

    cursor: grab;

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
        border-bottom: .2rem solid ${secondaryColor};
        border-top: .2rem solid ${secondaryColor};
        padding: .4rem 0;
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
  .currentProjectInfo{
    
    &--separator{
      width: 90%;
      border: .1rem solid ${primaryColor};
      margin: 3rem auto;
      box-shadow: 0 0 .5rem .1rem ${primaryColor};
    }

    &--name{
      font-size: 1.5rem;
      color: ${secondaryColor};
    }
    &--description{
      margin-bottom: 1rem;
      padding: 0 3vw;
      font-size: 1rem;
      color: ${primaryColor};
    }
    &--video{
      box-sizing: border-box;
      width: 95%;
      padding: .2rem;
      margin: 1.5rem auto;
      
      border: .2rem solid ${secondaryColor};
      border-radius: .4rem;
    }     

    &--tags-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 1rem;
      margin: 1rem 0;
      background: linear-gradient(to bottom, 
      rgba(20, 20, 20, .0) 0%, 
      rgba(20, 20, 20, 1) 15%, 
      rgba(20, 20, 20, 1) 85% , 
      rgba(20, 20, 20, .0) 100% );
    }
    &--tag{
      font-size: .7rem;
      padding: .2rem .5rem;
      margin: .2rem;  
      border-radius: 99rem;
      background: ${secondaryColor};
      color: white;
    }

    &--check-project-section{
      background: linear-gradient(to bottom, rgba(20, 20, 20, .0) 0% , rgba(20, 20, 20, 1) 10%);
      font-size: 1.2rem;
      color: ${secondaryColor};
      padding-bottom: 2rem;

      
      & .check-on-options{
        display: flex;
        justify-content: space-evenly;
        padding: 1.5rem 0 3rem 0;
        
        & .check-on-option{
          width: 7vw;
          min-width: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          cursor: pointer;
          
          &.check-on-option__disabled{
            opacity: .2;
            pointer-events: none;
          }
            



          &--name{
            font-size: .8rem;
            color: ${primaryColor};
          }

          &--img{
            width:100%;
            height: auto;
            border-radius: 50%;
          }


          transition: all .1s ease-out;
          &:not(.check-on-option__disabled):hover{
            transform: scale(1.2);
          }
        }
      }

    }
  }
`;





