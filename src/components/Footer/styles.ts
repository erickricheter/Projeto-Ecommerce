import styled from "styled-components";

export const Container = styled.footer`
  background-color: #fccf2e;
  padding: 10px;

  address {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px 50px;
  }

  .tamanho {
    height: 50px;
    top: 10px;
  }

  h2 {
    font-style: oblique;
    font-size: 2em;
  }

  a {
    text-decoration: none;
    font-size: 2em;
    color: #030086;
    padding: 10px;
    margin: 10px;
  }

  a:hover {
    text-decoration: underline;
    color: rgb(255, 255, 255);
  }
`;
