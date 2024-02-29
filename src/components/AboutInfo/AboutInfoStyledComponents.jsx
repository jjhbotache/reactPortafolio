import styled, { keyframes } from "styled-components";
import { mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";
import svgPc from "../../assets/svgs/programming-monitor-svgrepo-com.svg";

const shine = keyframes`

  0%,100% {
    text-shadow: 0 0 0  ${primaryColor};
    transform: scale(1);
    letter-spacing: .1rem;
  }
  50% {
    text-shadow: 0 0 .2rem  ${primaryColor};
    transform: scale(1.01);
    letter-spacing: .12rem;
  }
`;

export const AboutInfoContainer = styled.div`
  text-align: center;
  /* background-color: #1f1f1f; */
  color: ${primaryColor};
  font-size: 1rem;

  overflow-y: auto;
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

  /* change the colors of the scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #1f1f1f;
  }
  &::-webkit-scrollbar-thumb {
    background: #717171;
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
    margin-top: 2rem;
    font-size: 1.5rem;
    animation: ${shine} 2s infinite;
  }

  .btn-container{
    margin-top: 2rem;
  }
`;