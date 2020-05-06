import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

.post-content p:not(:last-child) {
  margin-bottom: 0.8rem;
}

body {
  --bg: #E2E2E2;
  --textNormal: #2D2D2D;
  --textLink: #BF5CAA;
  --bg2: #BFBFBF;
  --textLink2: #a5408f;
  background: var(--bg);
  color: var(--textNormal);
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

body.dark {
  -webkit-font-smoothing: antialiased;
  --bg: #2D2D2D;
  --textNormal: #EFEFEF;
  --textLink: #81C0FF;
  --textLink2: rgba(129, 192, 255, 0.75);
  --bg2: #4D4D4D;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: var(--textLink2);
}

h2 {
  font-size: 1.2rem;
  text-decoration: underline;
}

ul {
  padding-inline-start: 1rem;
}

a {
  color: var(--textLink);
}

ruby[lang="jp"] {
  font-family: 'Noto Sans JP', sans-serif;
}

rt {
  font-size: 0.6rem;
}

pre, code {
  background-color: var(--bg2);
  width: fit-content;
}

blockquote {
  margin: 15px 15px 15px 0;
  padding-left: 15px;
  border-left: 5px solid var(--bg2);
}

@media only screen and (max-width: 600px) {
  :root {
    
  }
}
`;
