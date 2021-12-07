import React from "react";
import { products } from "./products";
import { Container } from "./styles";
import { FavoriteProductData } from "./types";

export const FavoriteProducts = () => {
  const renderBaseValue = (product: FavoriteProductData) =>
    product.promotionalValue ? (
      <del>{product.baseValue}</del>
    ) : (
      product.baseValue
    );
  return (
    <Container>
      <h2>Nossos produtos favoritos!</h2>
      <div id="fav" className="listaProdutos">
        {products.map((product) => (
          <section key={product.imageText} className="favorito">
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
              </figcaption>
            </figure>
          </section>
        ))}
      </div>
    </Container>
  );
};
