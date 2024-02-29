import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../../constants/styleConstants";

export const CoolBtnContainer = styled.button`
  position: relative;
  background: #222;
  border: 1px solid ${primaryColor};
  overflow: hidden;
  border-radius: 999rem;

  width: 30vw;
  
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
    
    
    background: ${props => props.typeBtn === "primary" ? primaryColor : "#222"};
    transition: .3s all ease-out;
  }

  &:hover{
    transition-delay: .4s;
    transition: all .4s ease-out;
    box-shadow: 0 0 1rem ${primaryColor};
    &::before{
      width: 200%;
      transform: translate(-50%,-50%) scale(1);
      border-radius: 50%;
      opacity: 1;
    }
  }

`;