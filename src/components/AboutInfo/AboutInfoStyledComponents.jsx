import styled, { keyframes } from "styled-components";
import { lightColor, mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";
import svgPc from "../../assets/svgs/programming-monitor-svgrepo-com.svg";

const shine = keyframes`

  0%,100% {
    text-shadow: 0 0 0  ${primaryColor};
    transform: scale(1);
    /* letter-spacing: .03rem; */
  }
  50% {
    text-shadow: 0 0 .2rem  ${primaryColor};
    transform: scale(1.03);
    /* letter-spacing: .02rem; */
  }
`;



export const AboutInfoContainer = styled.div`
  text-align: center;
  /* background-color: #1f1f1f; */
  color: ${primaryColor};
  font-size: 1rem;

  overflow-y: auto;
  overflow-x: hidden;
  /* scrollbar-width: none; */
  height: 100%;
  padding: .5rem 1rem;
  width: 100%;

  background-image:
  linear-gradient( rgba(0, 0, 0, .85), rgba(0, 0, 0, .9) ) ,
  url(/Idea.svg);
  background-size: 70% 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  
  @media screen and (width > ${mdScreenWidth}){
    padding: 5vh 5vw ;
  }

  h1 {
    font-size: 2rem;
    height: 2.5em;
  }

  p {
    margin-bottom: 2rem;
  }

  .typer-container,.about-text{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    padding-bottom: 0;
    margin-bottom: 0;
    @media screen and (width < ${mdScreenWidth}){
      width: 100%;
      max-width: 500px;
      font-size: clamp(.8rem, 3.5vw, 1rem);
    }
  }

  .separator{
    color : ${secondaryColor};
    border: 1px solid ${secondaryColor};
    box-shadow: 0 0 .5rem ${secondaryColor};
  }
  .technologies-section{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    padding: .5rem;

    &__title,&__category-title{
      width: 100%;
      text-align: center;
    }
    &__category-title{
      margin-bottom: 2em;
    }

    &__category{
      width: 100%;
      max-width: 310px;
      border-radius: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.02);
    }

    

    
    &__technologies-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 1rem;
      align-items: center;
    }
    

  }

  .continue-exploring-text{
    margin: 2rem 0;
    padding: 0 1rem;
    font-size: 1rem;
    animation: ${shine} 2s infinite;
    cursor: pointer;
  }
  .Typewriter__cursor{
    display: none;
  }

  .cvImg-container{
    h2{
      margin-bottom: 1rem;
    }
    img{
      width: 100%;
      max-width: 300px;
      border-radius: 1rem;
    }
    cursor: pointer;
  }
  .CV-modal{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: auto;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    border-radius: 2rem;
    background-color: rgba(0, 0, 0, .8);
    backdrop-filter: blur(5px);
    color: ${primaryColor};
    
    
    opacity: 0;
    z-index: -2;
    transition: .5s all ease-out;

    img{display:none;}
    &[open]{
      opacity: 1;
      img{
        display:block;
        border-radius: .5rem;

        object-fit: cover;
        max-width: 100%;
        max-height: 100%;

      }
    }
  }

  .btn-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;