import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box
  }

  body {
    padding: 0;
    margin: 0;
  }

  p, ul {
    margin: 0;
  }

  #root {
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme};
    font-family: 'Lato', 'san-serif';
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
  }
`
