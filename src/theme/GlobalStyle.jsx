import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap" rel="stylesheet">

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    padding: 150px;
  }
  `;

export default GlobalStyle;
