import styled, { css, keyframes } from "styled-components";
import { darkColor, mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";


const hue_rotate = keyframes`
  0%,100%{
    box-shadow: 0 0 5px ${primaryColor};
  }
  50%{
    box-shadow: 0 0 12px ${primaryColor};
  }
`;

const blink = keyframes`
  0%,100%{
    opacity: 1;
  }
  50%{
    opacity: .15;
  }
`;

const blinkAndDisappear = keyframes`
  0%, 10%, 36%, 40%, 79%, 88%, 92%{
    opacity: 1;
  }
  5%, 12%, 45%, 54%, 60%, 86%,  98%{
    opacity: .3;
  }
  100%{
    opacity: 0;
    display: none;
  }
`;

const standOut = keyframes`
  0%,100%{
    transform: scale(1);
    box-shadow: 0 0 .2em ${primaryColor};
  }
  50%{
    transform: scale(1.2);
    box-shadow: 0 0 .5em ${primaryColor};
  }
`;



export const InfoDisplayerStyledComponent = styled.div`
  grid-area: tv;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tv-container{

      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%; 
      height: 100%;
      padding: 0;
      margin: 0;
      position: relative;

      
      
      .tv{
        position: relative;
        width: 100%; 
        height: 100%;
        max-height: inherit;
        
        
        
        border: .5em inset ${primaryColor};
        overflow: hidden;
        background: ${({theme})=>theme.colors.background};
        display: flex;
        justify-content: center;
        align-items: center;
        /* padding: 1rem; */
        transition: all .2s ease-out;

        left: unset;
        top: unset;
        transform: unset;

        /* hide the scroll bar */
        /* change the colors of the scrollbar */
        .content::-webkit-scrollbar {
          width: 10px;
        }
        .content::-webkit-scrollbar-track {
          background: #1f1f1f;
        }
        .content::-webkit-scrollbar-thumb {
          background: #717171;
        }


        .maximizeBtn{
          position: absolute;
          z-index: 2;
          top: .45rem;
          right: .45rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: ${primaryColor};
          i,i::before,i::after{
            color: ${({theme})=>theme.colors.background} !important;
          }
          display: grid;
          place-items: center;
          transition: all .1s ;
          cursor: pointer;
          &:hover{
            transform: scale(1.2);
            box-shadow: 0 0 5px ${primaryColor};
          }

          &--stand-out{
            animation: ${standOut} 1s cubic-bezier(.9,0,.1,1) infinite;
          }
        }

        & .return-btn{
          display: none;
          position: absolute;
          z-index: 5;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: all .5s ease-in ;
          transition-delay: .5s;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, .7) 0%,
            rgba(0, 0, 0, 0 ) 100%
          );
          backdrop-filter: blur(4px) ;
          border-radius: 50%;
          &:hover{
            transform: scale(1.2);
          }
        }
        &.tv__maximazed{
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);

          width: 99% !important;
          height: 99% !important;
          z-index: 3;
        }

        &:hover{
          animation: ${hue_rotate} 1s linear infinite;
        }

        

        .tv-noise-gif{
          ${({theme})=>theme.colors.background === darkColor
            ? css`opacity: 1;`
            : css`opacity: .5;`
          };
                    
          background: #000;
          position: absolute;
          top: 54%;
          left: 50%;
          transform: translate(-50%,-50%);
          z-index: 9;
          filter: hue-rotate(35deg);
          width: 130%;
          height: 130%;

          
          &.tv-noise-gif__blink-out{
            animation: ${blinkAndDisappear} 1s linear;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }
          
        }

        .tv-info{
          color: ${primaryColor};

        }

        .no-channel-alert{
          position: absolute;
          z-index: 9;

          padding: 10%;
          width: 105%;
          height: 105%;

          display: grid;
          place-items: center;

          border-radius:2rem ;
          color: ${primaryColor};
          font-size: 1.5rem;
          font-weight: 900;
          text-align: center;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, .7) 60%,
            rgba(0, 0, 0, 0 ) 150%
          );
          backdrop-filter: blur(10px) ; 

          text-shadow: 0 0 20px black;
          animation: ${blink} 7s cubic-bezier(.9,0,.1,1) infinite;
        }

      }


      
  }
`;