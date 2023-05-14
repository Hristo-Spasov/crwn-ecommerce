import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 500px) {
    height: 100vw;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

export const SignUpHeader = styled.h2`
  margin: 10px 0;
`;
