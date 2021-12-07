import React from "react";
import { ProductsList } from "./ProductsList";
import { Container } from "./styles";

export const Products = () => (
  <Container>
    <header id="produtos-header">
      <h1>
        <strong>Nossos produtos!</strong>
      </h1>
    </header>
    <ProductsList title="Rações caninas" type="dogsFood" />
    <ProductsList title="Rações Felinas" type="catsFood" />
    <ProductsList title="Produtos para peixes" type="fishProducts" />
    <ProductsList title="Brinquedos" type="toys" />
  </Container>
);
