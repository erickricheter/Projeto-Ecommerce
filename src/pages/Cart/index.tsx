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
    <>
      <ProductsList title="Produtos No carrinho" products={cart} />;
      <div id="Total">{totalValue.toFixed(2)}</div>
      <div id="Cupom">
        <input
          value={ticket}
          type="text"
          onChange={(evt) => setTicket(evt.target.value)}
        />
        {isTicketValid && (
          <>
            <span>O Cupom digitado é válido</span> O valor Com desconto é{" "}
            {(totalValue - totalValue * 0.15).toFixed(2)}
          </>
        )}
      </div>
    </>
  ) : (
    <h1>Carrinho Vazio!</h1>
  );
};
