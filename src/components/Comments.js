import styled from "styled-components";

// sidebar

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
  p:hover {
    text-decoration: underline;
  }
  @media (max-width: 620px) {
    p {
      display: none;
    }
  }
`;

// comments container

const CommentsContainer = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  margin-top: -10px;
  padding-top: 10px;
  background-color: #1e1e1e;
  max-width: 620px;
  width: 100%;
  border-radius: 0 0 16px 16px;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  @media (max-width: 620px) {
    width: 100%;
    border-radius: 0;
  }
`;

const Comment = styled.div`
  width: 90%;
  display: inline;
  height: 68px;
  border-bottom: 1px solid #353535;
  transform: rotate(-0.1deg);
  padding: 12px 0 19px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  @media (max-width: 620px) {
    width: 100%;
  }
`;

const CommentUserIcon = styled.img`
  height: 39px;
  width: 39px;
  margin-right: 18px;
  border-radius: 50px;
  cursor: pointer;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const CommentUserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 3px;
  max-width: 100%;
`;

const CommentUserName = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-right: 4px;
  cursor: pointer;

  color: #f3f3f3;
  &:hover {
    text-decoration: underline;
  }
`;

const CommentUserDetails = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #565656;
`;

const CommentText = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #acacac;
  @media (max-width: 620px) {
    max-width: 90vw;
  }
`;

const CreateComment = styled.div`
  width: 90%;
  display: inline;
  height: 83px;
  transform: rotate(-0.1deg);
  padding: 19px 0 25px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  @media (max-width: 620px) {
    width: 100%;
  }

  input {
    width: 80%;
    padding: 11px 0px 11px 15px;
    font-family: "Lato";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    background: #252525;
    border-radius: 8px 0 0 8px;
    height: 39px;
    border: none;

    letter-spacing: 0.05em;

    color: #575757;
    @media (max-width: 620px) {
      width: 75%;
    }
  }
  textarea:focus,
  input:focus {
    outline: none;
  }

  button {
    width: 10%;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 8px 8px 0;
    background-color: #252525;
    border: none;
    cursor: pointer;
  }
`;

export {
  Comments,
  QntComments,
  CommentsContainer,
  Comment,
  CommentUserIcon,
  CommentBox,
  CommentUserBox,
  CommentUserName,
  CommentUserDetails,
  CommentText,
  CreateComment,
};
