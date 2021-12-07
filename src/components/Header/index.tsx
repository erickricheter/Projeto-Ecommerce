import React, { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/all";
import { Container, Links } from "./styles";

export const Header = () => {
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
          <Links href="index.html">
            <img
              src="https://i.imgur.com/7Mda0IR.jpg"
              alt="Logo casinha pet"
              className="logo"
            />
          </Links>
        </div>

        <div id="menu">
          {width < 850 && (
            <Links href="produtos.html" className="show">
              Produtos
            </Links>
          )}

          {width >= 850 && (
            <>
              <Links href="produtos.html#racoesCanina" className="hidden">
                Cachorro
              </Links>
              <Links href="produtos.html#racaoFelina" className="hidden">
                Gato
              </Links>
              <Links href="produtos.html#produtosPeixe" className="hidden">
                Peixe
              </Links>
            </>
          )}
          <Links href="login.html">Login</Links>
          <Links href="cadastro.html">Cadastro</Links>
          <a href="carrinhoCompras.html">
            <GiShoppingCart size={32} />
          </a>
        </div>
      </nav>
    </Container>
  );
};
