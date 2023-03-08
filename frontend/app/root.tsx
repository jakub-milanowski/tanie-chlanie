import { ThemeProvider } from "styled-components";

import type { MetaFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { theme } from "./styles/global.style";
import { Body, GlobalStyle } from "./styles/root.style";
import NavBar from "./modules/root/presentation/nav-bar/nav-bar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tanie Chlanie",
  viewport: "width=device-width,initial-scale=1"
});

const App = (): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Body>
          <NavBar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {/* <LiveReload /> */}
        </Body>
      </ThemeProvider>
    </html>
  );
};

export default App;
