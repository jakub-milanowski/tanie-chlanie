"use client";

import React from "react";
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
  const styledComponentsStyleSheet = new ServerStyleSheet();
  styledComponentsStyleSheet.collectStyles(<>{children}</>);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <React.Suspense fallback={<div>dupa2</div>}>{styles}</React.Suspense>;
  });

  if (typeof window !== "undefined") return <></>;

  console.log("2", styledComponentsStyleSheet.instance);

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <React.Suspense fallback={<div>dupa</div>}>{children}</React.Suspense>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
