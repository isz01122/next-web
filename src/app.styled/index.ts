'use client';
import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCSS';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --color-main: #ea907a;
    --color-brown: #a0937d;
    --color-red: #ff2e63;
    --color-grey: #dcd7c9;
    --color-blue: #a6d0e4;
    --color-green: #adc2a9;
    --color-pink: #ffde7d;
  }

  ${resetCSS};
`;
