import styled, { createGlobalStyle } from 'styled-components'

// [color ideas]
// background-color: #a5477c;
// background-color: #db4b54;
// background-color: #c94861;
// background-color: #f1fde7;
// background-color: #c94a61;
// background-color: #d9a324;

// [original theme]
// --body-bg: #eee;
// --form-bg: transparent;
// --interactive-bg: #fff;
// --contrast: #333;
// --accent: #090;

const text = `
  color: var(--contrast);
  font-size: 16pt;
`

export const GlobalStyle = createGlobalStyle`
  :root {
    --body-bg: #c94a61;
    --form-bg: #d9a324;
    --interactive-bg: #f1fde7;
    --contrast: #261422;
    --accent: #1c4408;
  }

  body {
    ${text}
    background-color: var(--body-bg);
  }

  .money {
    text-align: right;
  }
`

export const fullWidth = `
  width: 100%;
  box-sizing: border-box;
`

const maxWidth = `
  ${fullWidth}
  max-width: 800px;
  margin: 0 auto;
`

export const Form = styled.form`
  ${maxWidth}
`

export const Table = styled.table`
  ${maxWidth}
  border-collapse: collapse;

  tbody tr {
    border-top: 1px dashed var(--contrast);
  }

  th {
    text-align: left;
  }

  th:first-child {
    width: 45%;
  }
`

const interactive = `
  ${text}
  display: block;
  background-color: var(--interactive-bg);
  border: 2px solid var(--contrast);
  border-radius: 4px;
  padding: 4px 12px;
`

export const Input = styled.input`
  ${fullWidth}
  ${interactive}

  ::placeholder {
    text-align: left;
  }
`

export const Select = styled.select`
  ${interactive}
  color: var(--accent);
`

export const Button = styled.button`
  ${interactive}
  border-radius: 12px;
`

export const Note = styled.div`
  text-align: center;
  margin: 1em 0;
`
