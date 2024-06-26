import styled, { keyframes } from "styled-components";
import { mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";
import svgPc from "../../assets/svgs/programming-monitor-svgrepo-com.svg";

const shine = keyframes`

  0%,100% {
    text-shadow: 0 0 0  ${primaryColor};
    transform: scale(1);
    letter-spacing: .03rem;
  }
  50% {
    text-shadow: 0 0 .2rem  ${primaryColor};
    transform: scale(1.01);
    letter-spacing: .02rem;
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
  url(${svgPc});
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
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
  .separator{
    color : ${secondaryColor};
    border: 1px solid ${secondaryColor};
    box-shadow: 0 0 .5rem ${secondaryColor};
  }
  .continue-exploring-text{
    margin: 2rem 1rem;
    font-size: .7rem;
    animation: ${shine} 2s infinite;
    cursor: pointer;
  }
  .Typewriter__cursor.hide{
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