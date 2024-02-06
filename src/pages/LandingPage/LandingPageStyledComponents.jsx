import styled from 'styled-components'
import { darkColor, lightColor, primaryColor } from '../../constants/styleConstants'

export const LandingPageStyledComponent = styled.div`
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
  .title{
    position: relative;
    z-index: 2;
    font-size: 3rem;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    background: transparent;
    border-radius: 9999px;
    color: ${lightColor};
    opacity: .4;
    transition: all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
  }
  .title__fade-out{
    opacity: 0 ;
    border: transparent ;
    letter-spacing: 5vw ;
  }
`
