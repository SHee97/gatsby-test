import { FunctionComponent, ReactNode } from 'react'
import GlobalStyle from './GlobaStyle'
import Footer from './Footer'
import styled from '@emotion/styled'

type TemplateProps = {
  children: ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
