import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto', sans-serif;
}

.navbar {
  display: flex;
  padding: 1.5rem;
  width: 100vw;
}

.nav-items {
  display: flex;
}

.nav-arrow {
  display: none;
}


.nav-item {
  color: ${({ theme }) => theme.text};
  user-select: none;
  text-transform: uppercase;
}

.nav-item:not(last-child) {
  margin-right: 2rem;
}

.nav-item:first-child {
  margin-right: 6rem;
}

.nav-item:last-child {
  margin-left: auto;
}

.nav-item:hover {
  cursor: pointer;
}

.link {
  text-decoration: none;
}

.link:hover {
  color: ${({ theme }) => theme.hightlight};
}

@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    position: fixed;
    align-items: center;
  }
  .nav-item {
    display: none;
    margin-right: 0rem !important;
    font-size: 0.95rem;
  }

  .nav-items {
    align-items: center;
    margin-left: auto;
  }
  
  .theme-changer, .active-item {
    display: block;
  }

  .nav-arrow {
    display: block;
    font-size: 1.5rem;
  }
}

}
`;