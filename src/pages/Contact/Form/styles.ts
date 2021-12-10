import { Form } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #dcdcdc;
  width: 400px;
  padding: 20px 30px;
  margin-top: 10vh;
  margin-bottom: 10vh;
  border-radius: 10px;
  text-align: center;
`;
export const Sform = styled(Form)`
  background-color: #dcdcdc;
  width: 400px;
  padding: 20px 30px;
  margin-top: 3vh;
  margin-bottom: 3vh;
  margin-left: 5vh;
  border-radius: 10px;
  text-align: center;
`;

export const Ssection = styled.section`
  padding: 15px;
  font-size: 0.8rem;
`;

export const Sp = styled.p`
  & > a {
    font-size: 1.2rem;
    color: #030086;
    text-decoration: none;
  }

  & > a:hover {
    color: #085508;
    text-decoration: underline;
  }
`;

export const Sh1 = styled.h1`
  margin: 25px 0px;
  padding: 15px;
`;
