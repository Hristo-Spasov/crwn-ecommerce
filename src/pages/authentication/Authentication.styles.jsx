import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media screen and (max-width: 1000px) {
    width: 50vw;
    flex-direction: column;
    gap: 100px;
    justify-content: center;
    align-items: center;
  }
`;
