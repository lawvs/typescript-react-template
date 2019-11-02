import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from './styles'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 1.5;
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <React.StrictMode>
        <Container>
          <Wrapper>Hello</Wrapper>
        </Container>
      </React.StrictMode>
    </>
  )
}
