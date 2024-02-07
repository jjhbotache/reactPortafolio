import { createGlobalStyle } from 'styled-components';
import { darkColor, lightColor } from './constants/styleConstants';

const GlobalStyles = createGlobalStyle`
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