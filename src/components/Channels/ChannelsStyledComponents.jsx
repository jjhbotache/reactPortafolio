import styled, { css, keyframes } from "styled-components";
import { mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";


const glowing = keyframes`
  0%,100%{
    background-position: 0 0;
  }
  50%{
    background-position: 400% 0;
  }
`

export const ChannelsStyledComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 4vh;

  /* hide the little triangle */
  summary::-webkit-details-marker {
    display: none;
  }
  
  
  @media screen and (width < ${mdScreenWidth}){
    margin-top: unset;
    align-items: center;
    justify-content: center;
    min-height: 80px;
  }

  .channels-details{
    position: relative;
    width: 80%;
    height: 80%;
    max-width: 150px;
    max-height: 50px;
    border-radius: .5rem;
    padding: .2em;
    box-sizing: border-box;
    

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;

    summary{
      background-color: ${({theme})=>theme.colors.darkColor};
      padding: .3rem;
      border-radius: .5rem;
      width: 100%;

      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          45deg,
          ${primaryColor}, #00a5d2, ${secondaryColor}, #00a5d2,
          ${primaryColor}, #00a5d2, ${secondaryColor}, #00a5d2
        );
        background-size: 800%;
        border-radius: .5rem;
        filter: blur(.3em);
        animation: ${glowing} 20s linear infinite;
      }

      small{
        color: ${({theme})=>theme.colors.text};
      }
    }


    
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
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;

      display: grid;
      place-items: center;

      z-index: 10;
      width: 95vw;
      height: 80vh;

      transition: all 0.3s ease-in-out;

      &::before{
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.9);
        filter: blur(10px);
        box-shadow: 0 0 10px ${primaryColor};
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
            letter-spacing: .1rem;
            transform: scale(1.1);
          }
        }
      }
    }

  }


  
`;
