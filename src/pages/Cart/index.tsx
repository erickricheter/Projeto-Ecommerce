import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductsList } from "../../components/ProductsList";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [isTicketValid, setIsTicketValid] = useState(false);
  const [ticket, setTicket] = useState("");
  const totalValue =
    cart.length &&
    cart
      .map(
        (product) =>
          (product.promotionalValue ?? product.baseValue) * (product.count ?? 1)
      )
      .reduce((previousValue, corruentValue) => previousValue + corruentValue);

  useEffect(() => {
    setIsTicketValid(ticket === "UTFPR");
  }, [ticket]);

  return cart.length ? (
    <ProductsList
      title="Produtos No carrinho"
      products={cart}
      totalValue={totalValue.toFixed(2)}
      setTicket={setTicket}
      isTicketValid={isTicketValid}
    />
  ) : (
    <h1>Carrinho Vazio!</h1>
  );
};
