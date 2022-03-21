import styled, { css, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg: #d9a324;
    --form-bg: #c94a61;
  }

  body {
    background-color: var(--main-bg);
  }
`

const shared = css`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const Form = styled.form`
  ${shared}
`

export const Table = styled.table`
  ${shared}
`
