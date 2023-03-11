"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "../styles/global.style";
import { GlobalStyle } from "../styles/root.style";

interface StyledComponentsRegistryProps {
  children: React.ReactNode;
}

const StyledComponentsRegistry = (props: StyledComponentsRegistryProps): JSX.Element => {
  const { children } = props;
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // @ts-ignore
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
