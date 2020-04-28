import { createGlobalStyle } from "styled-components";

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
  overflow-x: hidden;
}

ruby[data-lang="jp"] {
  font-family: 'Noto Sans JP', sans-serif;
}

rt {
  font-size: 0.6rem;
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
  color: ${({ theme }) => theme.content};
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

.nav-link {
  text-decoration: none;
}

.nav-link:hover {
  color: ${({ theme }) => theme.hightlight};
}


.blog-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-list-item {
  width: 865px;
  border-bottom: 1px solid #6A6A6A;
  padding: 1rem;
}

.blog-list-item section {
  margin-bottom: 2rem;
}

.blog-list-item-datetime {
  font-size: 0.95rem;
  color: ${({theme}) => theme.text};

}

.blog-list-item footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  font-size: 1.2rem;
}

.is-double-size {
  font-size: 2rem;
}

.content {
  color: ${({ theme }) => theme.content};
}

.post-link {
  color: ${({ theme }) => theme.hightlight};
  text-decoration: none;
}

.active-item {
  color: ${({ theme }) => theme.hightlight};
}

.blog-post {
  color: ${({ theme }) => theme.content};
}

.tag-list li {
  background-color: ${({ theme }) => theme.hightlight};
}
.tag-list li a {
  color: ${({ theme }) => theme.body};
}


.tags-title {
  color: ${({ theme }) => theme.content};
  text-align: center;
}

@media only screen and (max-width: 600px) {

  :root {
    font-size: 14px;
  }

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
  .active-item {
    color: ${({ theme }) => theme.content};
  }

  .nav-arrow {
    display: block;
    font-size: 1.5rem;
  }

  .nav-menu {
    width: 110px;
    text-align: center;
  }

  .nav-menu * {
    font-size: 1.2rem;
  }

  .section {
    height: 90vh;
    overflow-y: scroll;
  }

  .blog-list-item {
    max-width: 250px;
  }

  .blog-list-item-datetime span {
    display: block;
  }

  .blog-list-item-datetime {
    margin-bottom: 1rem;
  }

  .blog-list-item footer {
    display: block;
  }
}

}
`;
