import React from "react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div>child</div>
      <div>
        <p>Ruby texts</p>
        <ruby data-lang="jp">
          漢<rp>(</rp><rt>かん</rt><rp>)</rp>
          字<rp>(</rp><rt>じ</rt><rp>)</rp>
        </ruby>
        <ruby data-lang="ch">
          漢<rp>(</rp><rt>かん</rt><rp>)</rp>
          字<rp>(</rp><rt>じ</rt><rp>)</rp>
        </ruby>
      </div>
    </Layout>
  );
}

export default Index;