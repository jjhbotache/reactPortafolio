import { bodyFont, darkColor, lightColor, mdScreenWidth, primaryColor, secondaryColor, titleFont } from "./constants/styleConstants";
const deepDarkBlue = "#111222";


// themes.tsx
export const lightTheme = {
  colors: {
    primary: "#2f0044",
    background: lightColor,
    text: darkColor,
    darkColor: "#ffffff",
    lightColor: deepDarkBlue,
    secondaryColor: "#0f0061",
  },
  mdScreenWidth: mdScreenWidth,
  fonts: {
    title: titleFont,
    body: bodyFont,
  },
};

export const darkTheme = {
  colors: {
    primary: primaryColor,
    background: darkColor,
    text: lightColor,
    darkColor: deepDarkBlue,
    lightColor: lightColor,
    secondaryColor: secondaryColor,
  },
  mdScreenWidth: mdScreenWidth,
  fonts: {
    title: titleFont,
    body: bodyFont,
  },
};
