import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    line-height: 1.6rem;
  }

  body {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    background-color: #FFFFFF;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;
