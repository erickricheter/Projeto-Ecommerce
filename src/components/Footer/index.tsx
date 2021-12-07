import React from "react";
import { Container } from "./styles";

export const Footer = () => (
  <Container>
    <h2>Entre em contato!</h2>

    <address>
      <a href="#home">
        <img
          src="https://i.imgur.com/7Mda0IR.jpg"
          alt="Logo casinha pet"
          className="logo"
        />
      </a>
      <a href="faleConosco.html" className="tamanho">
        Fale Conosco!
      </a>
      <a href="sobre.html" className="tamanho">
        Conheça mais Sobre a gente!
      </a>
    </address>
  </Container>
);
