import styled from "styled-components";
// import { BaseButton } from "../button/Button.styles";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }

        button {
          opacity: unset;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const ProductName = styled.span`
  width: 90%;
  margin-bottom: 20px;
`;
export const ProductPrice = styled.span`
  width: 10%;
`;
