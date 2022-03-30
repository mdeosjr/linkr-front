import styled from "styled-components";

const PostsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export { PostsContainer };
