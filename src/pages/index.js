import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

const Index = () => {
  const digitalGarden =
    "https://tomcritchlow.com/2019/02/17/building-digital-garden/";
  const twitter = "https://twitter.com/Edumaxsantos";
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Início</title>
      </Helmet>
      <section className="section">
        <div className="max-70 center">
          <p className="title">
            Este site existe como forma de um{" "}
            <a target="_blank" href={digitalGarden}>
              jardim virtual
            </a>
            , onde posso publicar sobre assuntos que me interessam, como
            tecnologia, idiomas e religião.
          </p>
          <p className="title">
            Aqui posso cultivar o conhecimento que vou adquirindo com o tempo,
            além de publicar as minhas opiniões sobre o que eu quiser.
          </p>
          <p className="title">
            Ainda estou construindo o site. Faltam algumas coisas, mas já posso
            começar a fazer publicações.
          </p>
          <p>
            Para contato, pode me marcar ou mandar DM no{" "}
            <a href={twitter}>Twitter</a>
          </p>
        </div>
      </section>
      {/* <div>child</div>
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
      </div> */}
    </Layout>
  );
};

export default Index;
