"use client";

import type { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    cardShadow: string;
    white: string;
    text: string;
    primary: string;
  }
}

export const theme: DefaultTheme = {
  cardShadow:
    "0 0px 3px -1px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.14), 0 1px 1px rgba(0, 0, 0, 0.12)",
  white: "#fcfcfc",
  text: "#6b5e52",
  primary: "#eb8425"
};
