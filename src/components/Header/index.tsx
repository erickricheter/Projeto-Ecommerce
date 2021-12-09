import React, { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Container, Links } from "./styles";

export const Header = () => {
  const { cart } = useContext(CartContext);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <Container>
      <nav id="principal">
        <div id="logo">
          <Links to="/">
            <img
              src="https://i.imgur.com/7Mda0IR.jpg"
              alt="Logo casinha pet"
              className="logo"
            />
          </Links>
        </div>

        <div id="menu">
          {width < 850 && (
            <Links to="products" className="show">
              Produtos
            </Links>
          )}

          {width >= 850 && (
            <>
              <Links to="/products#dogsFood" className="hidden">
                Cachorro
              </Links>
              <Links to="/products#catsFood" className="hidden">
                Gato
              </Links>
              <Links to="products#fishProducts" className="hidden">
                Peixe
              </Links>
            </>
          )}
          <Links to="login.html">Login</Links>
          <Links to="/registration">Cadastro</Links>
          <Link to="cart">
            <GiShoppingCart size={32} />
          </Link>
          {cart.length}
        </div>
      </nav>
    </Container>
  );
};
