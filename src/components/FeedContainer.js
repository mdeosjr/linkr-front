import styled from "styled-components";

const FeedContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #333333;
  margin-top: 150px;
  gap: 15px;

  @media (max-width: 620px) {
    width: 100%;
    margin-top: 91px;
  }
`;

export { FeedContainer };
