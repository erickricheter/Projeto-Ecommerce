import React from "react";
import { ProductView } from "../../../components/ProductView";
import { products } from "./products";
import { Container } from "./styles";

export const FavoriteProducts = () => (
  <Container>
    <h2>Nossos produtos favoritos!</h2>
    <div id="fav" className="listaProdutos">
      {products.slice(0, 4).map((product) => (
        <ProductView product={product} />
      ))}
    </div>
  </Container>
);
