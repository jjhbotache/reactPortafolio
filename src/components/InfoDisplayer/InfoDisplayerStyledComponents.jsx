import styled, { keyframes } from "styled-components";
import { darkColor, primaryColor, secondaryColor } from "../../constants/styleConstants";


const hue_rotate = keyframes`
  0%,100%{
    box-shadow: 0 0 5px ${primaryColor};
  }
  50%{
    box-shadow: 0 0 12px ${primaryColor};
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
  

export const InfoDisplayerStyledComponent = styled.div`
  grid-area: tv;
  .tv-container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%; 
      height: 100%;
      padding: 0;
      margin: 0;
      
      .tv{
        position: relative;
        background: #000;
        width: 100%; 
        height: 100%;
        border: 5px solid ${primaryColor};
        border-radius: 2rem;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        transition: all .5s ease-out;

        left: unset;
        top: unset;
        transform: unset;


        &.tv__maximazed{
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);

          width: 90% !important;
          height: 95% !important;
          z-index: 1;
          box-shadow: 0 0 50vh 10vh rgb(46, 0, 86);
          


          &:hover{
            animation: none;
          }

        }

        &:hover{
          animation: ${hue_rotate} 1s linear infinite;
        }

        .tv-noise-gif{
          background: #000;
          position: absolute;
          top: 54%;
          left: 50%;
          transform: translate(-50%,-50%);
          z-index: 1;
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
      }

      
    }
`;