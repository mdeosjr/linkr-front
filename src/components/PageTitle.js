import styled from "styled-components";

const PageTitle = styled.h1`
  width:100%;
  margin-bottom: 30px;
  color: var(--white);
  font-size: 43px;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  align-self: flex-start;
  display:flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 620px) {
    margin: 0px 17px 17px 17px;
  }
`;

export { PageTitle };
