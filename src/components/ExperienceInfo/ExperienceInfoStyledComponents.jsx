import styled, { css, keyframes } from "styled-components";
import { darkColor, lightColor, mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// replace slide-left animation with a curved path (arc to the left)
const arcLeftAnim = keyframes`
  from {
    opacity: 1;
    transform: translateX(200%) rotate(0deg) translateY(0);
  }
  to {
    transform: translateX(-300%) rotate(-20deg) translateY(-10px);
    display: block;
  }
`;

export const ExperienceInfoStyledComponents = styled.div`
  /* make wrapper relative to position the sliding image */
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* animate .slideLeft: move along an arc to the left */
  .slideLeft {
    position: absolute;
    top: 50%;
    left: 15%;
    z-index: 10;
    width: auto;
    height: 10vh;
    transform: translateX(-500%) translateY(-50%);
    animation: ${arcLeftAnim} 1s ease-in-out 3 forwards;
    opacity: 0;
    animation-delay: 1.5s;
  }

  .experience-info__swiper {
    height: 90%;
    width: 85%;
    max-height: 400px !important;
    margin: 0;
  }

  .experience-info__slide {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#555555+0,333333+44,111111+100 */
    background: ${({ theme }) =>
      theme.colors.background == "#222222"
        ? "linear-gradient(10deg, #2a1a3a 0%, rgba(61,41,81,1) 44%, rgba(31,17,51,1) 100%)"
        : "linear-gradient(10deg, #d4c2e0 0%, #f0e4f7 44%, #d4c2e0 100%)"};
    border-radius: 1em;
    padding: 1em 1.3em;
    overflow-y: scroll;
    animation: ${fadeIn} 0.5s ease-in;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    scrollbar-width: none; /* Firefox */
  }

`;

export const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  .experience-card {
    display: flex;
    gap: 0.5em;
    background: red;

    &__title {
      font-size: clamp(1.2em, 2vw + 1em, 2em);
      font-weight: bold;
      line-height: 0.95em;
      margin-bottom: 0.2em;
    }

    &__date {
      font-size: 0.8em;
      opacity: 0.8;
    }

    &__images {
      aspect-ratio: 16/9;
      width: 100%;
      min-height: 140px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 0.5em;
      }
    }

    &__logo {
      width: 20px;
      height: 20px;
      object-fit: cover;
      border-radius: 0.5em;
    }

    &__technologies {
      display: flex;
      gap: 0.4em;
      font-size: 0.7em;
      flex-wrap: wrap;
    }

    &__technology {
      background: ${secondaryColor};
      padding: 0.3em 0.6em;
      border-radius: 999px;
      color: white;
    }

    &__description {
      font-size: 0.8em;
      opacity: 0.8;
      text-align: justify;
    }

    &__enterprises {
      display: flex;
      gap: 0.3em;
    }

    &__enterprise-item {
      display: flex;
      align-items: center;
      gap: 0.2em;
      margin-bottom: 0.5em;
      height: 20px;
      font-size: .9em;
      font-weight: bold;
      

      &__logo {
        height: calc(1em - 5px);
      }

      &__name {
      }
    }
  }
`;