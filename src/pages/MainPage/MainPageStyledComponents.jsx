import styled, { keyframes } from "styled-components";
import { mdScreenWidth, primaryColor, secondaryColor, titleFont } from "../../constants/styleConstants";


export const MainPageStyledComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .frame{
    /* center it */
    position: absolute;
    width: 50px;
    height: 50px;
    transition: all 1s cubic-bezier(0.175, 0.177, 0.178, 1.1);
    .rectangle{
      position: absolute;
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
        transform: translateY(-94%);
      }
    }
    .rectangle__bottom{
      transform: rotate(90deg) translatex(150%) translateY(-60%);
      .rectangle--triangle{
        position: absolute;
        top: 0;
        transform: translateY(-99%) rotateY(180deg);
      }
    }
    /* actions */
    &.frame__on-corner{
      left: 0;
      bottom: 0;
      transform: translate(170%,-170%) scale(5);
      @media screen and (width < ${mdScreenWidth}){
        transform: translate(115%,-115%) scale(5);
      }
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
        transform: translateY(99%) rotate(90deg) scaleY(-1);
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
      @media screen and (width < ${mdScreenWidth}){
        transform: translate(-115%,115%) scale(5) ;
      }
      transform: translate(-170%,170%) scale(5) ;
    }
  }
`;


export const MainInfo= styled.main`
  box-sizing: border-box;
  height: 100%;
  width: 100%;

  opacity: 0;
  transition: all .5s cubic-bezier(0.175, 0.177, 0.178, 1.1);

  padding: 3rem;
  @media screen and (width < ${mdScreenWidth}){padding: .7rem;}

  &.fade-in{
    opacity: 1;
  }
  

  .container{
    width: 100%;
    height: 100%;

    position: relative;
    z-index: 1;

    display: grid;

    grid-template-areas: 
    "title-text tv"
    "channels tv"
    ;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 2fr;
    
    @media screen and (width < ${mdScreenWidth}){
      grid-template-areas: 
      "title-text"
      "separator"
      "channels"
      "tv"
      ;
      grid-template-rows: 4fr 1fr 1fr 55vh;
      grid-template-columns: 100%;

    }
    
    .title-texts{
      grid-area: title-text;
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding: 0 .5rem 0 .5rem;

      @media screen and (width < ${mdScreenWidth}){
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0;
        padding-top: 1rem;
      }
      .name{
        font-size: 6vw;
        line-height: 1em;

        font-family: ${titleFont};
        letter-spacing: 3px;

        

        @media screen and (width < ${mdScreenWidth}) {
          font-size: 5vh;
        }
        &__first{
          color: ${({theme})=>theme.colors.primary};
        }
        &__last{
          color: ${({theme})=>theme.colors.secondaryColor};
        }
      }
      .rol{
        font-size: 1rem;
        color: ${({theme})=>theme.colors.secondaryColor};
        margin-top: 1rem;
      }
    }

    .title-texts-and-channels-separator{
      display: none;
      @media screen and (width < ${mdScreenWidth}){
        display: block;
      }

      width: 100%;
      height: 2px;
      background: ${primaryColor};
      border: none;
      margin: 1rem 0;

    }
  

    .channels{
      grid-area: channels;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      padding-left: 1rem;
      margin-bottom: 3rem;
      
      @media screen and (width < ${mdScreenWidth}){
        display: grid;
        margin-bottom: 0rem;
        padding-left: 0;
        justify-content: center;
        align-items: center;
      }

      .channels--list{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li{
          a{
            text-decoration: none;
            color: ${primaryColor};
            font-size: 1.5rem;
            transition: all 0.2s ease-in-out;
            &:hover, &:focus{
              text-shadow: 0 0 5px ${primaryColor};
              letter-spacing: 3px;
            }
          }
        }
      }
    }

  }

`;