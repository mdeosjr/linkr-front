import styled from "styled-components";

const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 25px;
  top: 80px;
  gap: 5px;
  @media (max-width: 620px) {
    left: 15px;
  }
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const QntLikes = styled.p`
  all: unset;
  font-size: 11px;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { Likes, Icon, QntLikes };
