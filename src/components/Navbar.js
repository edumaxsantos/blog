import React from "react";
import { FaSun, FaMoon, FaHome, FaBook } from "react-icons/fa";
import { Link } from "gatsby";
import styled from "styled-components";
import { useLocation } from "@reach/router";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const Navbar = styled.nav`
  display: flex;
  padding: 1.5rem;
  width: 100vw;
  height: 3.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    bottom: 0;
    position: fixed;
    align-items: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 5rem;
  color: ${props => props.active === 'true' ? 'var(--textLink)' : 'var(--textNormal)'};

  &:hover {
    color: var(--textLink);
  }
`;

const FaHomeIcon = styled(FaHome)`
  display: none;

  @media only screen and (max-width: 600px) {    
    display: inline-block;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

const FaBookIcon = styled(FaBook)`
  display: none;
  @media only screen and (max-width: 600px) {
    display: inline-block;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

const DarkMode = ({toggleTheme}) => (
  <FaSun onClick={e => toggleTheme('light')} />
);

const LightMode = ({toggleTheme}) => (
  <FaMoon onClick={e => toggleTheme('dark')} color="black" />
);

const Theme = ({theme, toggleTheme}) => (
      <>
        {theme === 'dark' ? (<DarkMode toggleTheme={toggleTheme} />) : 
         (theme === 'light' ? (<LightMode toggleTheme={toggleTheme} />) : null)
        }
      </>
);

const Toggler = () => (
  <ThemeToggler>
    {(props) => (
      <Theme {...props} />
    )}
  </ThemeToggler>
);


export default () => {

  const {pathname} = useLocation();

  return (
    <Navbar>
      <div>
        <NavItem active={`${pathname === '/'}`} to="/"><FaHomeIcon  />Início</NavItem>
        <NavItem active={`${pathname.startsWith('/blog/')}`} to="/blog/"><FaBookIcon />Blog</NavItem>
        {/* <NavItem to="/contact/">Contato</NavItem> */}
      </div>
      <Toggler />
    </Navbar>
  );
};
