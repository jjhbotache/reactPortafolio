import styled, { keyframes } from "styled-components";
import { mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PageOptionsContainer = styled.ol`
  position: absolute;
  z-index: 2;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding: 0;
  opacity: 0;

  border-radius: .2rem;
  background: linear-gradient(135deg,#222 20%,${secondaryColor} 150%);
  /* backdrop-filter: blur(50px); */

  padding: 0 .2rem .2rem 0;
  /* width: 200px;
  height: 50px; */
  
  top: 0vh;left: 2vw;
  @media screen and (width > ${mdScreenWidth}) {
    top: 3vh;left: 3vw;
  }

  

  animation: ${fadeIn} 1s ease-in forwards;
  animation-delay: 2s;

  li {
    background: none;
    margin: .5rem;
    cursor: pointer;
    button {
      font-size: 1rem;
      background: none;
      margin: 0;
      padding: 0;
      &:focus {
        outline: none;
      }
    }
  }

  .languaje-chooser{
    position: absolute;
    width: 95%;
    height: 95%;

    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    background: #222;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    button {
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      &:focus {
        outline: none;
      }
    }
  }
`;
