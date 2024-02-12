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
`;

export default GlobalStyles;