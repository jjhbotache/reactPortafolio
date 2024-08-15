import styled, { css, keyframes } from 'styled-components';
import { darkColor, mdScreenWidth } from '../../constants/styleConstants';

const blink = keyframes`
  from, to {
    opacity: .6;
  }
  50% {
    opacity: 0;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;




export const LandingPageStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
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
      ${({ theme }) => theme.colors.primary} 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
    transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .main-content {
    position: relative;
    word-break: keep-all;
    width: 92vw;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.3rem;
    padding: 3rem;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    
    &::before {
      transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:${({ theme }) => theme.colors.background == darkColor
        ? "linear-gradient(334deg, #2e0518, #081d30, #260752, #2e0518)"
        : "linear-gradient(334deg, #ffcee5, #c0e0ff, #d1b0ff, #ffbedc)"};
      background-size: 180% 180%;
      animation: ${gradientAnimation} 10s ease-in-out infinite;
      border-radius: 0.3rem;
      z-index: 0;
      filter: blur(70px);

      
    }
    
    .Typewriter {
      height: 30vh;
    }

    @media screen and (width < ${mdScreenWidth}) {
      font-size: 0.8rem;
      padding: .5rem;
    }
    z-index: 1;
    &:hover {
      cursor: pointer;
      ${({ theme }) => theme.colors.background == darkColor && css`box-shadow: 0 0 200px 10px ${({ theme }) => theme.colors.primary}30;`};
      
      &::before {
        filter: blur(25px);
      }
    }
  }
  .main-content__title {
    max-width: 100vw;
    text-align: center;

    position: relative;
    z-index: 2;
    font-size: 2.5em;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    background: linear-gradient(15deg, #ac1bac, #329b9b);

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    line-height: 1.5em;

    overflow: hidden;

    &__cursor {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-size: 3rem;
      opacity: 0.6;
      animation: infinite 0.7s linear ${blink};
      transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  .main-content__title__fade-out {
    @media screen and (width > ${mdScreenWidth}) {
      white-space: nowrap;
      max-width: unset !important;
    }

    opacity: 0;
    border: transparent;
    & * {
      letter-spacing: 2vw;
    }
    transition: all 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  }
  .main-content__instruction {
    position: relative;
    z-index: 2;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 3px;
    animation: infinite 5s ease-in ${blink};
    transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: ${({ theme }) => theme.colors.lightColor};
    &:hover {
      animation: none !important;
      opacity: 1;
    }
  }
`;
  