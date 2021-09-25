import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --cc-bg: #000;
  --cc-text: #ffffff;
  --cc-btn-primary-bg: #03bdca;
  --cc-btn-primary-text: #fff;
  --cc-btn-primary-hover-bg: #00e7f9;
  --cc-btn-secondary-bg: #202227;
  --cc-btn-secondary-text: var(--cc-text);
  --cc-btn-secondary-hover-bg: #3e454a;
  --cc-toggle-bg-off: #667481;
  --cc-toggle-bg-on: var(--cc-btn-primary-bg);
  --cc-toggle-bg-readonly: #8a8a8a;
  --cc-toggle-knob-bg: var(--cc-cookie-category-block-bg);
  --cc-toggle-knob-icon-color: var(--cc-text);
  --cc-cookie-category-block-bg: #23272a;
  --cc-cookie-category-block-bg-hover: #2b3035;
  --cc-section-border: #292d31;
  --cc-cookie-table-border: #2b3035;
  --cc-webkit-scrollbar-bg: #667481;
  --cc-webkit-scrollbar-bg-hover: #9199a0;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--cc-bg);
  color: var(--cc-text);
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background: #202227;
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body,
input,
textarea,
select,
button {
  font-weight: 400;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`;
