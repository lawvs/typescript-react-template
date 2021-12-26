import { StrictMode } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './styles'

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.bg};
`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
`

const Footer = styled(ContentWrapper)`
  flex: unset;
  padding-top: 40px;
  padding-bottom: 20px;
`

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StrictMode>
      <AppContainer>
        <ContentWrapper>
          <div>Typescript React Template</div>
        </ContentWrapper>
        <Footer as="footer">licensed under the MIT license.</Footer>
      </AppContainer>
    </StrictMode>
  </ThemeProvider>
)
