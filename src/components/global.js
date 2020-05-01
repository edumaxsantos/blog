import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
  background: var(--bg);
  color: var(--textNormal);
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

a {
  color: var(--textLink);
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
