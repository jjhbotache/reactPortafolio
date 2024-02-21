import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, secondaryColor } from "../../constants/styleConstants";

export const ContactInfoContainer = styled.div`
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contactCircleContainer{
    background-color: #222;
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    /* border-radius: 50%; */
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.053) 0%,
        #222222a6 50%,
        rgba(0,0,0,0) 100%
        
      );
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

    margin-top: 1.5rem;
    
    ${props =>(
      props.$name === "gmail"
      ? `border-radius: .4rem;`
      : `border-radius: 50%;`
    )}

    z-index: ${props => props.$index + 2 || 0};
    width: 3rem;
    height: 3rem;
    transition: all .2s ease-out;
    &:hover{
      transform: scale(1.1) translate(-50%,-50%);
      box-shadow: 0px 0px .5rem 0.2rem ${primaryColor};
    }
  }
`;

