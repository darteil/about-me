import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: monospace;
    font-size: 15px;
    background-color: ${(props) => props.theme.primaryBg};
    color: ${(props) => props.theme.primaryColor};
    padding: 5px;
  }
`;
