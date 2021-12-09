import React from "react";
import { ProductsList } from "../../components/ProductsList";
import { Container } from "./styles";

export const Products = () => {
  React.useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        anchorEl.scrollIntoView();
      }
    }
  }, [window.location.hash]);
  return (
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
};
