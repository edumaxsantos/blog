import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "../components/Section";

const P = styled.p`
margin: 0.85rem 0;
`;

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
      <Section>
        <P>
          Este site existe como forma de um{" "}
          <a title="Building Digital Garden" target="_blank" href={digitalGarden}>
            jardim virtual
          </a>
          , onde posso publicar sobre assuntos que me interessam, como
          tecnologia, idiomas e religião.
        </P>
        <P>
          Aqui posso cultivar o conhecimento que vou adquirindo com o tempo,
          além de publicar as minhas opiniões sobre o que eu quiser.
        </P>
        <P>
          Ainda estou construindo o site. Faltam algumas coisas, mas já posso
          começar a fazer publicações.
        </P>
        <P>
          Para contato, pode me marcar ou mandar DM no{" "}
          <a title="Meu perfil no twitter" href={twitter}>Twitter</a>
        </P>
      </Section>
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
