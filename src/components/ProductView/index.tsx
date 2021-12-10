/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Modal, notification } from "antd";
import React, { useContext, useState } from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";
import { ProductData } from "../../pages/Home/FavoriteProducts/types";
import { Container, Img, ModalWrapper, Price } from "./styles";
import { ProductViewProps } from "./types";

const renderBaseValue = (product: ProductData) =>
  product.promotionalValue ? <del>{product.baseValue}</del> : product.baseValue;

const renderPice = (product: ProductData) => (
  <Price>
    R$ {renderBaseValue(product)}
    {product.promotionalValue && <span> por R${product.promotionalValue}</span>}
  </Price>
);

export const ProductView = ({ product, isCartView }: ProductViewProps) => {
  const { addItem, plusOne, minusOne, removeItem } = useContext(CartContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Container key={product.imageText}>
        <figure onClick={showModal}>
          <Img src={product.imageUrl} alt={product.imageText} />
          <figcaption>
            {product.figureCaption}
            {product.category && (
              <>
                <br />
                {product.category}
              </>
            )}
            <br />
            {renderPice(product)}
          </figcaption>
        </figure>
        {!isCartView && (
          <Button
            value="Comprar"
            type="primary"
            shape="round"
            icon={<GiTakeMyMoney />}
            size="large"
            onClick={() => {
              addItem(product);
              notification.open({ message: "Produto adicionado Ao carrinho!" });
            }}
          >
            Comprar!
          </Button>
        )}
        {isCartView && (
          <>
            <Button onClick={() => minusOne(product.id)}>-</Button>
            {product.count}
            <Button onClick={() => plusOne(product.id)}>+</Button>
            <Button onClick={() => removeItem(product.id)}>REMOVER</Button>
          </>
        )}
      </Container>
      <Modal
        title={product.figureCaption}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalWrapper>
          <Img src={product.imageUrl} alt={product.imageText} />
          <div>
            <p>{product.imageText}</p>
            <p>{product.aditionalInfo}</p>
            {renderPice(product)}
          </div>
        </ModalWrapper>
      </Modal>
    </>
  );
};
