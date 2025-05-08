import styled, { css, keyframes } from "styled-components";
import { darkColor, mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PageOptionsContainer = styled.ol`
  position: fixed;
  z-index: 10;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding: 0;
  opacity: 0;

  border-radius: .2rem;
  ${({theme})=>theme.colors.background === darkColor
  ? css`background: linear-gradient(135deg,#222 20%,${secondaryColor} 150%);`
  : css`background: linear-gradient(135deg,#e0e0e0 20%,white 150%);`
  };
  /* backdrop-filter: blur(50px); */

  padding: 0 .2rem .2rem 0;
  /* width: 200px;
  height: 50px; */
  
  top: 0vh;left: 2vw;
  @media screen and (width > ${mdScreenWidth}) {
    top: 1em; left: 1em;
    font-size: .3rem;
  }

  


  animation: ${fadeIn} 1s ease-in forwards;

  .close{
    position: absolute;
    top: 2rem;
    right: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    i{font-size: 1.5rem;}
    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 1rem 0 ${primaryColor};
    }
  }
  
  .option-btn{
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
    transition: all .1s ease-out;
    &:hover {
      transform: scale(1.2);
      filter:drop-shadow(
        0 0 .2rem ${primaryColor}
      );
    }
    
  }

  li {
    background: none;
    margin: .5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
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

  .language-chooser{
    position: fixed;
    width: 85%;
    height: 85%;
    z-index: 30;
    border-radius: 1rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 1rem;
      background: rgba(20,20,20,.9);
      filter: blur(.5rem);
    }

    .title{
      text-align: center;
      font-size: 2rem;
      color: ${primaryColor};
    }
    .separator{
      width: 80%;
      border: 1px solid ${primaryColor};
    }

    .language-option{
      background: none;
      color: ${secondaryColor};
      font-size: 1.5rem;
      padding: .5rem 1rem;
      border: none;
      border-radius: .5rem;
      cursor: pointer;
      transition: all .2s ease-out;
      &:focus {
        outline: none;
      }
      &:hover {
        background: ${primaryColor};
        color: white;
      }
      &.chosen{
        background: ${primaryColor};
        color: white;
      }
    }

  }
`;
