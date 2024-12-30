import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased; //deixar a fonte mais nítida
  }

  body, input, button, textarea {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
    font-size: 1rem;
  }
`
