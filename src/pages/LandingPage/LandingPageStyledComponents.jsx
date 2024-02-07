import styled, { keyframes } from 'styled-components'
import { darkColor, lightColor, primaryColor } from '../../constants/styleConstants'

const blink = keyframes`
  from, to {
    opacity: .6;
  }
  50% {
    opacity: 0.2;
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
  }
  .main-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: .3rem;
    padding: 2rem;
    &:hover{
      cursor: pointer;
      box-shadow:  0 0 30px 5px ${primaryColor};      
    }
  }
  .main-content--title{
    position: relative;
    z-index: 2;
    font-size: 3rem;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    background: transparent;
    border-radius: 9999px;
    color: ${lightColor};
    opacity: .4;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;

    &:hover{
      opacity: 1;
    }
  }
  .main-content--title__fade-out{
    opacity: 0 ;
    border: transparent ;
    & *{letter-spacing: 4vw ;}
    transition: all 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  }
  .main-content--instruction{
    position: relative;
    z-index: 2;

    letter-spacing: 3px;
    animation: infinite 2s ease-in ${blink} ;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover{
      animation: none !important;
      opacity: 1;
    }
  }
`

