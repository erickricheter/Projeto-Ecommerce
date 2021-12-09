import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { ProductView } from "../ProductView";
import { products as pList } from "../../pages/Home/FavoriteProducts/products";
import { Container } from "./styles";
import { ProductsListProps } from "./types";

export const ProductsList = ({ title, type, products }: ProductsListProps) => {
  const [productList, setProductList] = useState(
    products ?? pList.filter((product) => product.type === type)
  );

  const handleOrderName = () => {
    const orderName = productList.sort((productA, productB) =>
      productA.figureCaption > productB.figureCaption ? 1 : -1
    );
    setProductList([...orderName]);
  };

  const handleOrderPrice = () => {
    const orderPrice = productList.sort((productA, productB) =>
      productA.baseValue > (productB.promotionalValue ?? productB.baseValue)
        ? 1
        : -1
    );
    setProductList([...orderPrice]);
  };

  useEffect(() => {
    if (products) {
      setProductList(products);
    }
  }, [products]);

  return (
    <Container id={type}>
      <h2>{title}!</h2>
      <Button onClick={handleOrderName}>Nome</Button>
      <Button onClick={handleOrderPrice}>Preço</Button>
      <div className="listaProdutos formatacaoProd">
        {productList.map((product) => (
          <ProductView
            isCartView={!!products}
            heigh="250px"
            product={product}
          />
        ))}
      </div>
    </Container>
  );
};
