import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/contact" className="tamanho">
        Fale Conosco!
      </Link>
      <Link to="/contact" className="tamanho">
        Conheça mais Sobre a gente!
      </Link>
    </address>
  </Container>
);
