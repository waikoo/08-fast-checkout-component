import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }

  .address-con input[type='radio']:checked {
    color: black;
  }
`;
