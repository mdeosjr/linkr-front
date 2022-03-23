import styled from "styled-components";

const PageTitle = styled.h1`
  margin-bottom: 43px;
  color: var(--white);
  font-size: 43px;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  align-self: flex-start;

  @media (max-width: 620px) {
    margin: 0px 17px 17px 17px;
  }
`;

export { PageTitle };
