import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "../components/Section";

const P = styled.p`
  margin: 0.85rem 0;
`;

const Intro = styled.h1`
  font-size: 2.5rem;
  font-style: oblique;
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
        <Intro>Opa, sou desenvolvedor, automatizador de testes, apreciador de idiomas e tentando escrever um blog.</Intro>
        <P>
          Tive interesse em criar esta página após ler sobre{" "}
          <a title="Building Digital Garden" target="_blank" rel="noopener noreferrer" href={digitalGarden}>
            jardim virtual
          </a>
          , onde poderia publicar sobre assuntos que me interessam, como
          tecnologia, idiomas e religião.
        </P>
        <P>
          Aqui posso cultivar o conhecimento que venho adquirindo com o tempo, compartilhando o que aprendi e 
          o que estou estudando no momento.
        </P>
        <P>
          Para contato, pode me marcar ou mandar DM no{" "}
          <a title="Meu perfil no twitter" target="_blank" rel="noopener noreferrer" href={twitter}>Twitter</a>
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
