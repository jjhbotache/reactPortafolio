import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/styleConstants";

export const MainPageStyledComponent = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .frame{
    /* center it */
    position: absolute;
    width: 50px;
    height: 50px;
    transition: all 3s cubic-bezier(0.175, 0.177, 0.178, 1.1);
    .rectangle{
      position: absolute; //for reel
      width: 10px;
      height: 40px;
    }
  }
  /* ------------------------------------------------- */
  .frame--bottom-left{
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    /* subcomponents */
    .rectangle{
      left: 0;
      bottom: 0;
      background: linear-gradient(to top, ${secondaryColor} 20%, ${primaryColor} 100% );
    }
    .rectangle__left{
      .rectangle--triangle{
        position: absolute;
        top: 0;
        transform: translateY(-100%);
      }
    }
    .rectangle__bottom{
      transform: rotate(90deg) translatex(150%) translateY(-60%);
      .rectangle--triangle{
        position: absolute;
        top: 0;
        transform: translateY(-100%) rotateY(180deg);
      }
    }
    /* actions */
    &.frame__on-corner{
      left: 0;
      bottom: 0;
      transform: translate(170%,-170%) scale(5);
    }
  }
  /* ------------------------------------------------- */
  .frame--top-right{
    right: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
    /* subcomponents */
    .rectangle{
      right: 0;
      top: 0;
      background: linear-gradient( to bottom, ${secondaryColor} 20%, ${primaryColor} 100% );
    }
    .rectangle__right{
      .rectangle--triangle{
        position: absolute;
        bottom: 0;
        transform: translateY(100%) rotate(90deg) scaleY(-1);
      }
    }
    .rectangle__top{
      transform:  rotate(-90deg) translateY(-60%) translateX(150%) scaleY(-1);
      .rectangle--triangle{
        position: absolute;
        bottom: 0;
        transform: translateY(100%) rotate(90deg) scaleY(-1);
      }
    }
    /* actions */
    &.frame__on-corner{
      top: 0;
      right: 0;
      transform: translate(-170%,170%) scale(5) ;
    }
  }
`;