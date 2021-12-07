import React from "react";
import { ProductView } from "../../../components/ProductView";
import { products } from "../../Home/FavoriteProducts/products";
import { Container } from "./styles";
import { ProductsListProps } from "./types";

export const ProductsList = ({ title, type }: ProductsListProps) => (
  <Container>
    <h2>{title}!</h2>

    <div className="listaProdutos formatacaoProd">
      {products
        .filter((product) => product.type === type)
        .map((product) => (
          <ProductView heigh="250px" product={product} />
        ))}
    </div>
  </Container>
);
