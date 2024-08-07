import { createGlobalStyle } from 'styled-components';
import { bodyFont } from './constants/styleConstants';

const GlobalStyles = createGlobalStyle`

  * {
    font-family: ${bodyFont};
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: ${({theme})=>theme.colors.background};
    color: ${({theme})=>theme.colors.text};
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }


  /* tostify classes overriding */
  :root {
    --toastify-color-info: ${({theme})=>theme.colors.primary};
  }

  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  p{
    margin: 0;
  }

`;

export default GlobalStyles;

// ${({theme})=>theme.colors.primary}
// ${({theme})=>theme.colors.background === darkColor
//             ? css`opacity: 1;`
//             : css`opacity: .5;`
//           };