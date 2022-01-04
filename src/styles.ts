// https://www.styled-components.com/
import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, Icons16, sans-serif;
    margin: 0;
    padding: 0;
    font-style: normal;
    scrollbar-gutter: stable;
  }

a {
  color: inherit;
  text-decoration: none;
}
`

export const theme: DefaultTheme = {
  bg: 'white',
}
