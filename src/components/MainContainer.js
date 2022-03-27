import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export { MainContainer };
