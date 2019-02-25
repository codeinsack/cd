import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;