import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};

        font-family: 'Nunito', sans-serif;
        -webkit-font-smoothing: antialiased;

        margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme['base-title']};
    }

    label {
        color: ${(props) => props.theme['base-label']};
    }

    input, textarea, button {
        font-family: 'Nunito', sans-serif;
    }
`
