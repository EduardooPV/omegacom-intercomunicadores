// Libs
import React from "react";

// Styles
import { Container } from "./styles";

// Components
import { CardProduct } from "@components/CardProduct";

const props = [
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador 1 via",
    link: "intercomunicador-1-via",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador 2 vias",
    link: "intercomunicador-2-vias",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador 3 vias",
    link: "intercomunicador-3-vias",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador 4 vias",
    link: "intercomunicador-4-vias",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador 5 vias",
    link: "intercomunicador-5-vias",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador 6 vias",
    link: "intercomunicador-6-vias",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador Lotérica",
    link: "intercomunicador-loterica",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador Bilheteria",
    link: "intercomunicador-bilheteria",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador Condominío",
    link: "intercomunicador-condominio",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador Radiologia",
    link: "intercomunicador-radiologia",
  },
];

export function OurModels() {
  return (
    <Container>
      {Object.values(props).map((card) => (
        <CardProduct key={card.model} props={card} />
      ))}
    </Container>
  );
}
