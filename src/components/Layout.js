import React from "react";
import "./all.sass";
import styled from "styled-components";
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
  return (
    <>
      <GlobalStyles />
      <BasicLayout>
        <Navbar />
        <Container>{children}</Container>
      </BasicLayout>
    </>
  );
};

export default Layout;
