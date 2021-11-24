import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
    }

    h1 {
        font-size: 3rem;
        margin: 3rem 0;
    }
    h2 {
        font-size: 2rem;
        font-weight: 300;
        margin: 1rem;
    }

    a {
        font-size: 1.1rem;
    }
    span {
        font-weight: 500;
    }
    p {
        font-size: 1rem;
    }
`;

export default GlobalStyle;