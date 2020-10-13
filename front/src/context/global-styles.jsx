import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
    --layout-margin: 2rem;
    }

    body {
    font-family: sans-serif;
    margin: 0 var(--layout-margin);
    display: grid;
    padding-top: 200px;
    }
`

export default GlobalStyle