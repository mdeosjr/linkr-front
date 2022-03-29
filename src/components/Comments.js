import styled from "styled-components";

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 80px;
  left: 0px;
  top: 140px;
  gap: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  p {
    display: inline-block;
  }
  @media (max-width: 620px) {
    left: 15px;
    width: 30px;
  }
`;

const QntComments = styled.p`
  all: unset;
  font-size: 11px;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 620px) {
    p {
      display: none;
    }
  }
`;

export { Comments, QntComments };
