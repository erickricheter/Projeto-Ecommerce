import styled from "styled-components";

export const Container = styled.section`
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 29px 6px #cccccc;
  box-shadow: 0px 0px 29px 6px #cccccc;
  overflow: hidden;
  padding: 5px;

  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
`;

export const Price = styled.span`
  color: #007dc5;
`;

export const ModalWrapper = styled.div`
  display: flex;
`;
