import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, secondaryColor } from "../../constants/styleConstants";

export const ContactInfoContainer = styled.div`
  
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    /* background-color:${({theme})=>theme.colors.darkColor}; */
  }

  .contactCircleContainer{
    background-color:${({theme})=>theme.colors.darkColor};
    width: 90%;
    aspect-ratio: 1/1;


    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    background: radial-gradient(
      circle,
      transparent 0%,
      ${({theme})=>theme.colors.lightColor}12 50%,
      transparent 100%
    );

    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80%;
      border-radius: 50%;
      transition: all .4s ease;
    }

    .contactCircleContainer--item{
      position: absolute;
      height: auto;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      }
  }
`;

export const LogoLink = styled(Link)`
  position: relative;
  img{
    position: absolute;
    /* center it */
    left: 50%;
    top: 70%;
    transform: translate(-50%,-50%);

    margin-top: 5vw;
    border-radius: 50%;

    z-index: ${props => props.$index + 2 || 0};
    width: 8vw;
    min-width: 4rem;
    aspect-ratio: 1/1;
    transition: all .2s ease-out;
    &:hover{
      transform: scale(1.1) translate(-50%,-50%);
      box-shadow: 0px 0px .5rem 0.2rem ${primaryColor};
    }
  }
`;

