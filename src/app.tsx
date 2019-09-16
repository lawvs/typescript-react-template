import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from './styles'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
      <Container>
        <Wrapper>Hello</Wrapper>
      </Container>
    </>
  )
}
