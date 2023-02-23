"use client";
import { createGlobalStyle } from "styled-components";
import { defaultTheme, Theme } from "./themes";

export const GlobalStyle = createGlobalStyle<{theme: Theme}>`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        width: auto;
        height: auto;
    }
    *:focus {
    outline: 0 !important;
    }
    buton::-moz-focus-inner {
   border: 0;
    }
    html, body, #root {
        min-height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased !important;
        background: ${(props) => props.theme.colors.background};
        height: 100vh;
    }
    #root {
        display: flex;
    }
    button {
        cursor: pointer;
    }
    a{
        outline: none;
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }
`;