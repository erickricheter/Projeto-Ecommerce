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
      src="https://i.imgur.com/QJ0Xe8z.png"
      alt="Imagem promoção"
      height="320px"
    />
    <img
      src="https://i.imgur.com/5smo4RL.png"
      alt="Imagem promoção"
      height="320px"
    />
    <img
      src="https://i.imgur.com/6zxvJFW.png"
      alt="Imagem promoção"
      height="320px"
    />
  </Container>
);
