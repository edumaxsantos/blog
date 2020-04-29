import React, {useState, useEffect} from "react";
import "./all.sass"
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Navbar from "./Navbar";

const Layout = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const l = localStorage.getItem('isDarkMode');
    console.log("is this the problem?");
    if (l !== isDarkMode.toString()) {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('isDarkMode', !isDarkMode);
    }
      
  }, [isDarkMode]);

  const changeMode = () => {
    localStorage.setItem('isDarkMode', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Navbar isDarkMode={isDarkMode} changeMode={changeMode} />
        {children}
      </>
    </ThemeProvider>
  )
};


export default Layout;