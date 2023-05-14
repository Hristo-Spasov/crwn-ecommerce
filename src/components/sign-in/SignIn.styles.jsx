import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 500px) {
    margin-top: 100px;
    height: 100vw;
  }
`;

export const SignInHeader = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  @media screen and (max-width: 500px) {
    button {
      font-size: 12px;
    }
  }
`;
