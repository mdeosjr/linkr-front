import styled from "styled-components";

const Post = styled.div`
  background-color: #171717;
  width: 100%;
  height: 276px;
  border-radius: 16px;
  position: relative;
  padding: 19px 23px 20px 87px;
  margin-bottom: 16px;
  
  @media (max-width: 620px) {
    width: 100%;
    height: 232px;
    margin: 16px 0;
    border-radius: 0px;
    padding: 10px 18px 15px 69px;
  }
`;

const UserName = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: var(--white);
  margin-bottom: 7px;

  @media (max-width: 620px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  top: 16px;
  left: 18px;
  position: absolute;

  @media (max-width: 620px) {
    width: 40px;
    height: 40px;
    top: 9px;
    left: 15px;
  }
`;

const PostText = styled.p`
  height: 52px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;

  @media (max-width: 620px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const LinkDetailsContainer = styled.div`
  width: 503px;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  position: relative;
  padding: 24px 0 43px 19px;
  display: flex;
  flex-direction: row;

  @media (max-width: 620px) {
    width: 100%;
    height: 115px;
    padding: 7px 0 8px 11px;
  }
`;

const LinkDetailsDescriptionContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 64%;
  @media (max-width: 620px) {
    width: 61%;
  }
`;

const LinkDetailsImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 154px;
  border-radius: 0 12px 13px 0;
  position: absolute;
  right: 0;
  top: 0;
  @media (max-width: 620px) {
    width: 35%;
  }
`;

const LinkDetailsTitle = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 620px) {
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 4px;
  }
`;

const LinkDetailsDescription = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 13px;
  color: #9b9595;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 620px) {
    font-size: 9px;
    line-height: 11px;
    margin-bottom: 4px;
  }
`;

const LinkParagraph = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #cecece;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 620px) {
    font-size: 9px;
    line-height: 11px;
  }
`;

const PostWarning = styled.p`
  color: #fff;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  width: 450px;
  @media (max-width: 620px) {
    width: 80%;
  }
`;

const TrashIcon=styled.img`
  position:absolute;
  top:20px;
  right:20px;
`
const StyledLink = styled.a`
  color: var(--white);
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  line-height: 17px;
  margin-top: 36px;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  Post,
  UserImg,
  LinkDetailsContainer,
  PostText,
  UserName,
  LinkDetailsDescriptionContainer,
  LinkDetailsImg,
  LinkDetailsTitle,
  LinkDetailsDescription,
  LinkParagraph,
  PostWarning,
  TrashIcon,
  StyledLink,
};
