import type { ReactNode } from 'react'
import styled from 'styled-components'
import { fullWidth } from './themed'

type LayoutProps = {
  head?: ReactNode,
  main?: ReactNode,
  foot?: ReactNode,
}

const shared = `
  ${fullWidth}
  padding: 8px;
`

const Head = styled.header`
  ${shared}
  background-color: var(--form-bg);
`

const Main = styled.main`
  ${shared}
`

const Foot = styled.footer`
  ${shared}
  background-color: var(--form-bg);

  position: fixed;
  bottom: 0;

  @media screen and (min-width: 400px) {
    & {
      position: unset;
    }
  }

  @media screen and (max-width: 400px) and (display-mode: standalone) {
    & {
      padding-bottom: 20px;
    }
  }
`

export default function Layout({ head, main, foot }: LayoutProps) {
  return (
    <>
      {head && (<Head>{head}</Head>)}
      {main && (<Main>{main}</Main>)}
      {foot && (<Foot>{foot}</Foot>)}
    </>
  )
}
