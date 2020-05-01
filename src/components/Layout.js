import React from "react";
import "./all.sass";
import styled from "styled-components";
import { GlobalStyles } from "./global";
import Helmet from "react-helmet";

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
      <Helmet>
        <meta name="viewport" content="minimum-scale=1 width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
      <GlobalStyles />
      <BasicLayout>
        <Navbar />
        <Container>{children}</Container>
      </BasicLayout>
    </>
  );
};

export default Layout;
