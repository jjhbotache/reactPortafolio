import styled, { keyframes } from "styled-components";
import { mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";

const breathe = keyframes`
  0%,100%{
    transform: scale(1);
    box-shadow: 0 0 .5rem ${primaryColor};
  }
  50%{
    transform: scale(1.01);
    box-shadow: 0 0 1rem ${primaryColor};
  }
`;

export const ChannelsStyledComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .channels-details{
    width: 80%;
    height: 80%;
    max-width: 200px;
    max-height: 50px;
    border-radius: .5rem;
    padding: .3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    

    border: 1px solid ${primaryColor};
    background: rgba(255, 255, 255, .1);

    &[open]{ animation: none; }
    &:not([open]){ animation: ${breathe} 5s ease-in-out infinite; }
    
    color: white;
    
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    &:hover{
      box-shadow:  0 0 15px ${secondaryColor};
    }


    &--title{
      list-style-type: none;
      cursor: pointer;
      height: 100%;
      display: grid;
      place-items: center;
    }
    &--info{
      opacity: 0;
      position: absolute;
      display: grid;
      place-items: center;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      /* box-shadow: rgba(0, 0, 0, .8) 0 0 10rem; */

      transition: all 0.3s ease-in-out;

      &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.85);
        filter: blur(10px);
        box-shadow: 0 0 10rem 3rem rgba(0,0,0,.8);
      }
      
      &.open{
        opacity: 1;
      }

      ol{
        width: 100%;
        height: 100%;
        max-height: 300px;
        font-size: 2rem;
        list-style-type: none;
        padding: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-around;
        li{
          text-decoration: none;
          color: ${secondaryColor};
          font-size: 1.5rem;
          transition: all 0.15s ease-out;
          cursor: pointer;
          &:hover, &:focus{
            text-shadow: 0 0 .2rem ${primaryColor};
            letter-spacing: .4rem;
            /* font-size: 2rem; */
            @media screen and (width < ${mdScreenWidth}) { transform: scale(1.5); }
            @media screen and (width >= ${mdScreenWidth}) { transform: scale(2); }

          }
        }
      }
    }

  }
  
`;
