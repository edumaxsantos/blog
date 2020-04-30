import React from "react";
import { FaSun, FaMoon, FaHome, FaBook } from "react-icons/fa";
import { Link } from "gatsby";
import styled from "styled-components";
import { useLocation } from "@reach/router";

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
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 5rem;
  color: ${props => props.active ? props.theme.highlight : props.theme.content};
  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`;

const FaHomeIcon = styled(FaHome)`
  display: none;
  color: ${props => props.active ? props.theme.highlight : 'inherit'};

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

export default ({ isDarkMode, changeMode }) => {
  const ThemeIcon = (props) =>
    isDarkMode ? <FaSun {...props} /> : <FaMoon {...props} />;

  const {pathname} = useLocation();

  return (
    <Navbar>
      <div>
        <NavItem active={pathname === '/'} to="/"><FaHomeIcon  />Início</NavItem>
        <NavItem active={pathname.startsWith('/blog/')} to="/blog/"><FaBookIcon />Blog</NavItem>
        {/* <NavItem to="/concact/">Contato</NavItem> */}
      </div>
      <ThemeIcon onClick={changeMode} />
    </Navbar>
  );
};
