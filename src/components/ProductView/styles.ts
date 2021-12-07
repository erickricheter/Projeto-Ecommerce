import styled from "styled-components";

export const Container = styled.section`
  border: 2px solid gray;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;

  img {
    width: 250px;
    height: 250px;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
