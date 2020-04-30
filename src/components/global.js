import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`




body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.content};
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

a {
  color: ${({ theme }) => theme.highlight}
}

ruby[data-lang="jp"] {
  font-family: 'Noto Sans JP', sans-serif;
}

rt {
  font-size: 0.6rem;
}

@media only screen and (max-width: 600px) {
  :root {
    font-size: 14px;
  }
}
`;
