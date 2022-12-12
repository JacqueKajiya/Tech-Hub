import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --negative: #e83f5b;
        --success: #3fe864;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        --font-1: 1rem;
        --font-2: .75rem;
        --font-3: .6rem;

        --radius-1: 8px;
        --radius-2: 4px;

    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html{
        font-family: "Inter", sans-serif;
        width: 100vw;
        height: 100vh;
    }

    body{
        overflow-x: hidden;
        background-color: var(--grey-4);
    }

    h1, h2, h3, h4, label{
        color: var(--grey-0);
    }

    p, small{
        color: var(--grey-1);
    }

    button{
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }

`