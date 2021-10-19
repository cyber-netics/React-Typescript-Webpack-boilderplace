import { createGlobalStyle } from "styled-components";

/**
 *
 * Colors
 *
 */
const highlight = "#d9d9d9";
const highlightPrimary = "#40a9ff";
const highlightPrimaryFade = "rgba(24, 144, 255, 0.2)";

const innerDark = "#000000d9";

/**
 *
 * General Colors
 */
const dark = "#000000";
const light = "#ffff";

/**
 *
 * Theme
 */
const themeColors = {
  border: {
    highlight: highlight,
    primary: highlightPrimary,
  },

  shadow: {
    primary: highlightPrimaryFade,
  },

  text: {
    innerDark: innerDark,
  },
};

/**
 *
 * Base
 */
const baseColors = {
  dark,
  light,
};

/**
 *
 * Config
 */
export interface ThemeProps {
  baseColors: typeof baseColors;
  themeColors: typeof themeColors;
}

export const themeStyle: ThemeProps = Object.assign(
  {},
  { baseColors, themeColors }
);

/**
 *
 * Global Style
 */
export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
