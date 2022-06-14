import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Title } from "@components/Title";
import { PresentationProduct } from "@components/PresentationProduct";
import { MainModels } from "@components/MainModels";

import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

const Container = styled.main`
  padding: 110px 0 60px 0;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > h1 {
    font-family: Montserrat, sans-serif;
    font-size: ${f.h3.fontSize};
    line-height: ${f.h3.lineHeight};
    color: ${c.neutral500};
    text-align: center;
  }
  > p {
    font-family: Montserrat, sans-serif;
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    color: ${c.neutral500};
    text-align: justify;
  }

  @media (min-width: 1023px) {
    p {
      font-size: ${f.paragraphLarge.fontSize};
      line-height: ${f.paragraphLarge.lineHeight};
    }
  }
`;

interface ProdutoProps {
  [key: string]: string;
}

export default function Produto({ slug }: ProdutoProps) {
  const staticContent = {
    "intercomunicador-1-via": {
      title: "Intercomunicador 1 via",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do interomunicador de 1 via.",
      differentials: ["Intercomunicador", "de", "1 via"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do intercomunicador de 1 via",
    },
    "intercomunicador-2-vias": {
      title: "Intercomunicador 2 vias",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do Intercomunicador 2 vias.",
      differentials: ["Intercomunicador", "de", "2 vias"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do Intercomunicador 2 vias",
    },
    "intercomunicador-3-vias": {
      title: "Intercomunicador 3 vias",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do interomunicador de 3 vias.",
      differentials: ["Intercomunicador", "de", "3 vias"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do intercomunicador de 3 vias",
    },
    "intercomunicador-4-vias": {
      title: "Intercomunicador 4 vias",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do interomunicador de 4 vias.",
      differentials: ["Intercomunicador", "de", "4 vias"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do intercomunicador de 4 vias",
    },
    "intercomunicador-5-vias": {
      title: "Intercomunicador 5 vias",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do interomunicador de 5 vias.",
      differentials: ["Intercomunicador", "de", "5 vias"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do intercomunicador de 5 vias",
    },
    "intercomunicador-6-vias": {
      title: "Intercomunicador 6 vias",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do interomunicador de 6 vias.",
      differentials: ["Intercomunicador", "de", "6 vias"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do intercomunicador de 6 vias",
    },
    "intercomunicador-loterica": {
      title: "Intercomunicador Lotérica",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do intercomunicador Loterica.",
      differentials: ["Intercomunicador", "para", "Lotérica"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do intercomunicador Loterica.",
    },
    "intercomunicador-bilheteria": {
      title: "Intercomunicador Bilheteria",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do Intercomunicador Bilheteria.",
      differentials: ["Intercomunicador", "para", "Bilheteria"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do Intercomunicador Bilheteria",
    },
    "intercomunicador-condominio": {
      title: "Intercomunicador Condominío",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do Intercomunicador Condominío.",
      differentials: ["Intercomunicador", "para", "Condominio"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do Intercomunicador Condominío.",
    },
    "intercomunicador-radiologia": {
      title: "Intercomunicador Radiologia",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description: "Descrição do Intercomunicador Radiologia.",
      differentials: ["Intercomunicador", "para", "Radiologia"],
      linkBuy: "#",
      linkManual: "#",
      specification: "Especificações do Intercomunicador Radiologia",
    },
  };

  const displayContent = staticContent[slug];

  return (
    <Container>
      <Title small>{displayContent.title}</Title>

      <PresentationProduct props={displayContent} />

      <Title small>Modelos relacionados</Title>
      <MainModels />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths:
      [
        "/produto/intercomunicador-1-via",
        "/produto/intercomunicador-2-vias",
        "/produto/intercomunicador-3-vias",
        "/produto/intercomunicador-4-vias",
        "/produto/intercomunicador-5-vias",
        "/produto/intercomunicador-6-vias",
        "/produto/intercomunicador-loterica",
        "/produto/intercomunicador-bilheteria",
        "/produto/intercomunicador-condominio",
        "/produto/intercomunicador-radiologia",
      ] || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slug = params.produto_id;

  return {
    props: {
      slug,
    },
  };
};
