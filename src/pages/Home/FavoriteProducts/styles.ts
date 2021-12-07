import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 35px 0px;
  padding: 15px;

  #fav {
    padding: 25px;
    margin-top: 15px;
  }

  .listaProdutos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    gap: 35px;
    padding: 15px 0px;
  }

  .listaProdutos img {
    width: 200px;
    height: 200px;
  }

  .listaProdutos section figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    text-align: center;
  }
`;
