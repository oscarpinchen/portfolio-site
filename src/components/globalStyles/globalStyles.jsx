import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: europa, sans-serif;
    transition: all 0.50s linear;
  }
  `;

export default GlobalStyle;
