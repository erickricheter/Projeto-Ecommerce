import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./styles";

export const AdsCarousel = () => (
  <Container
    showThumbs={false}
    dynamicHeight={false}
    infiniteLoop
    autoPlay
    interval={3000}
  >
    <img
      src="https://i.imgur.com/IicRQHT.jpg"
      alt="Imagem promoção"
      height="320px"
    />
    <img
      src="https://i.imgur.com/OsBCrAs.png"
      alt="Imagem promoção"
      height="320px"
    />
    <img
      src="https://i.imgur.com/elq6sD5.jpg"
      alt="Imagem promoção"
      height="320px"
    />
  </Container>
);
