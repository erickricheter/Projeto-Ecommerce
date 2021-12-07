import { Button } from "antd";
import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { ProductData } from "../../pages/Home/FavoriteProducts/types";
import { Container } from "./styles";
import { ProductViewProps } from "./types";

const renderBaseValue = (product: ProductData) =>
  product.promotionalValue ? <del>{product.baseValue}</del> : product.baseValue;

export const ProductView = ({ product }: ProductViewProps) => (
  <Container key={product.imageText}>
    <figure>
      <img src={product.imageUrl} alt={product.imageText} />
      <figcaption>
        {product.figureCaption}
        {product.category && (
          <>
            <br />
            {product.category}
          </>
        )}
        <br />
        <span>
          R$ {renderBaseValue(product)}
          {product.promotionalValue && (
            <span> por R${product.promotionalValue}</span>
          )}
        </span>
        <Button
          value="Comprar"
          type="primary"
          shape="round"
          icon={<GiTakeMyMoney />}
          size="large"
        >
          Comprar!
        </Button>
      </figcaption>
    </figure>
  </Container>
);
