import React, { memo } from "react";

import { ThemeProvider } from "styled-components";
import { themeStyle, GlobalStyle } from "./theme";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <ThemeProvider theme={themeStyle}>
    <GlobalStyle />
    <>{children}</>
  </ThemeProvider>
);

export default memo(Layout);
