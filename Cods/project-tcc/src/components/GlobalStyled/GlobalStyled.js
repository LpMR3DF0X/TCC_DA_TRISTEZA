import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-width: 100vw;
        min-height: 100vh;
        height: 100%;
        width: 100%;
    }

    ol,li{
        list-style: none;
    }
`;
