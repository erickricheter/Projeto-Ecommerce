import { Button, Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #dcdcdc;
  width: 400px;
  margin: 0 auto;
  padding: 20px 30px;
  margin-top: 10vh;
  margin-bottom: 10vh;
  border-radius: 10px;
  text-align: center;
`;

export const SInput = styled(Input)`
  display: block;
  width: 100%;
  text-align: left;
  border: 2px solid black;

  &:focus {
    border-bottom: 3px solid #08558b;
  }
`;

export const H2 = styled.h2`
  text-align: left;
  font-size: 1.5rem;
`;

export const Sbutton = styled(Button)`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  height: 40px;
  border-radius: 20px;
  margin-top: 30px;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;
`;

export const ButtonAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
