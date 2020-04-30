import React, { useState, useEffect } from "react";
import "./all.sass";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

import Navbar from "./Navbar";

const BasicLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  @media only screen and (max-width: 600px) {
    height: calc(100vh - 3.5rem);
    overflow-y: scroll;
  }
`;

const Layout = ({ children }) => {
  const darkModeKey = "@eduardosantos.dev/isDarkMode";

  const [isDarkMode, setIsDarkMode] = useState(() => {

    return typeof window !== 'undefined' && window.localStorage.getItem(darkModeKey) === "true" ? true : false;
  });

  const changeMode = () => {
    if (typeof window !== 'undefined')
      window.localStorage.setItem(darkModeKey, !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <BasicLayout>
          <Navbar isDarkMode={isDarkMode} changeMode={changeMode} />
          <Container>{children}</Container>
        </BasicLayout>
      </>
    </ThemeProvider>
  );
};

export default Layout;
