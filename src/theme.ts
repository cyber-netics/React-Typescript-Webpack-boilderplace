import { createGlobalStyle } from "styled-components";

/**
 *
 * Colors
 *
 */
const highlight = "#d9d9d9";
const dark = "#000000";
const primary = "#1890ff";
const light = "#fff";
const error = "#ff4d4f";
const success = "rgb(82, 196, 26)";

/**
 *
 * Theme
 */
const themeColors = {
  border: {
    highlight: highlight,
    error,
  },

  shadow: {},

  text: {},
};

/**
 *
 * Base
 */
const baseColors = {
  primary,
  light,
  error,
  success,
  dark,
};

/**
 *
 * Config
 */
export interface ThemeProps {
  baseColors: typeof baseColors;
  border: typeof themeColors.border;
  shadow: typeof themeColors.shadow;
  text: typeof themeColors.text;
}

export const themeStyle: ThemeProps = Object.assign(
  {},
  { baseColors, ...themeColors }
);

/**
 *
 * Global Style
 */
export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
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
