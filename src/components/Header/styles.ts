import styled from "styled-components";

export const Container = styled.header`
  background-color: #fccf2e;
  height: 200px;

  #principal {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    padding: 15px;
  }

  #logo,
  #menu {
    padding: 3px;
  }

  .logo {
    width: 150px;
    height: 95px;
  }

  #menu {
    margin: 10px 0px;
    gap: 10px;
    display: flex;
  }

  #menu img {
    width: 40px;
    margin-left: 20px;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  color: #030086;

  &:hover {
    color: rgb(255, 255, 255);
    text-decoration: underline;
  }
`;
