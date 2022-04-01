import styled from 'styled-components';

const RepostInfo = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1E1E1E;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 15px 10px 15px;
  gap: 10px;
  z-index: 1;
  margin-bottom: -10px;
  & img {
    cursor: auto;
  }
  & span {
    font-weight: bold;
  }
`

const RepostText = styled.p`
  font-size: 11px;
  color: #fff;
`

const Reposts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 80px;
  left: 0px;
  top: 200px;
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

const QntReposts = styled.p`
  all: unset;
  font-size: 11px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 620px) {
    p {
      display: none;
    }
  }
`;

export {
    Reposts,
    QntReposts,
    RepostInfo,
    RepostText,
}