import styled, { css, keyframes } from "styled-components";
import { darkColor, lightColor, mdScreenWidth, primaryColor, secondaryColor } from "../../constants/styleConstants";

export const ExperienceInfoStyledComponents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .experience-info__swiper {
    height: 90%;
    width: 90%;
    max-height: 400px !important;
    margin: 0;
  }

  .experience-info__slide {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#555555+0,333333+44,111111+100 */
    background: ${({ theme }) =>
      theme.colors.background == "#222222"
        ? "linear-gradient(10deg, #1a1a1a 0%, rgba(51,51,51,1) 44%, rgba(17,17,17,1) 100%)"
        : "linear-gradient(10deg, #dadada 0%, #f7f7f7 44%, #dadada 100%)"};
    border-radius: 1em;
    padding: 1em 1.3em;
    overflow-y: scroll;
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    scrollbar-width: none; /* Firefox */
  }

  .experience-info__slide--visible {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
      color: ${darkColor};

      &__logo {
        height: calc(1em - 5px);
      }

      &__name {
        color: ${lightColor};
      }
    }
  }
`;