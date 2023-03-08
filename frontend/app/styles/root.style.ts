import styled, { createGlobalStyle } from "styled-components";

import { theme } from "./global.style";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    color: #6b5e52;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    &:-webkit-any-link {
      text-decoration: none;
    }
  }
`;

export const Body = styled.body`
  padding: 0;
  margin: 0;
  width: 100vw;
  font-size: 16px;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 1440px;
  padding: 1rem;
`;
