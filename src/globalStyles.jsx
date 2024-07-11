import { createGlobalStyle } from 'styled-components';
import { bodyFont, darkColor, lightColor } from './constants/styleConstants';

const GlobalStyles = createGlobalStyle`

  * {
    font-family: ${bodyFont};
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: ${darkColor};
    color: ${lightColor};
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }


  /* tostify classes overriding */
  :root {
  --toastify-color-info: ${lightColor};
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