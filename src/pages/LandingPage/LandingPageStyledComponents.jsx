import styled, { keyframes } from 'styled-components'
import { bodyFont, darkColor, lightColor, mdScreenWidth, primaryColor } from '../../constants/styleConstants'

const blink = keyframes`
  from, to {
    opacity: .6;
  }
  50% {
    opacity: 0;
  }
`



export const LandingPageStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${darkColor};
  color: ${lightColor};
  overflow: hidden;
  position: relative;

  .cursor-effect {
    position: absolute;
    width: 60vw;
    height: 60vw;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0.07;
    background: radial-gradient(
      circle,
      ${primaryColor} 0%,
      rgba(0,0,0,0) 100%
    );
    z-index: 1;
    transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .main-content{
    word-break: break-word ;
    width: 92vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: .3rem;
    padding: 2rem;

    .Typewriter{
      height: 50vh;
      min-height: 50vh;
    }
    
    @media screen and (width < ${mdScreenWidth}) {
      .Typewriter{
        height: 70vh;
        min-height: 70vh;
      }
      padding: .2rem;
      font-size: .8rem;
    }
    z-index: 1;
    &:hover{
      cursor: pointer;
      box-shadow:  0 0 30px 5px ${primaryColor};      
    }
  }
  .main-content__title{
    max-width: 100vw;
    text-align: center;

    

    position: relative;
    z-index: 2;
    font-size: 3rem;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    background: transparent;
    color: ${lightColor}; 
    opacity: .6;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;

    
    overflow: hidden;

    &__cursor{
      color: ${primaryColor};
      font-weight: 700;
      font-size: 3rem;
      opacity: 0.6;
      animation: infinite 0.7s linear ${blink} ;
      transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &:hover{
      opacity: 1;
    }
  }
  .main-content__title__fade-out{
    

    @media screen and (width > ${mdScreenWidth}) {
      white-space: nowrap;
      max-width: unset !important;
    }


    opacity: 0 ;
    border: transparent ;
    & *{letter-spacing: 2vw ;}
    transition: all 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;

  }
  .main-content__instruction{
    position: relative;
    z-index: 2;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 3px;
    animation: infinite 2s ease-in ${blink} ;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover{
      animation: none !important;
      opacity: 1;
    }
  }
`

