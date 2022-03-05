import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #ffffff;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    font-family: "Titillum Web", sans-serif;
    font-weight: 400;
  }

  button {
    cursor:pointer;
    border: none;
    box-shadow: none;
    background: none;
  }

  input,
  textarea,
  button,
  select,
  a,
  Link {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
    color: #000000;
  }
`;
