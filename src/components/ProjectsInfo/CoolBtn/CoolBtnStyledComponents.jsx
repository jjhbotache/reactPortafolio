import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../../constants/styleConstants";

export const CoolBtnContainer = styled.button`
  position: relative;
  overflow: hidden;
  border-radius: 999rem;
  min-width: 20vw;
  padding: 1.5vh 0;
  
  ${
    props => props.$typeBtn === "primary" ? 
    `
      background: ${primaryColor};
      border: 1px solid ${secondaryColor};
    ` 
    : 
    `
      background: #222;
      border: 1px solid ${primaryColor};
    `  
  }
  
  .text{
    position: relative;
    z-index: 2;
    
    color: white;
  }



  &::before{
    content: "";
    position: absolute;
    width: 0;
    height: 110%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    border-radius: 50%;
    opacity: 0;
    
    
    background: ${props => props.$typeBtn === "primary" ?  "#222" : primaryColor};
    transition: .3s all ease-out;
  }

  &:hover{
    transition-delay: .4s;
    transition: all .4s ease-out;
    box-shadow: 0 0 1rem ${props => props.$typeBtn === "primary" ? primaryColor : secondaryColor};
    &::before{
      width: 200%;
      transform: translate(-50%,-50%) scale(1);
      border-radius: 50%;
      opacity: 1;
    }
  }

`;