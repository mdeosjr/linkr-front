import styled from "styled-components";

const Post = styled.div`
  background-color: #171717;
  width: 100%;
  height: 276px;
  border-radius: 16px;
  position: relative;
  padding: 19px 23px 20px 87px;
  margin-bottom: 16px;
`;

const UserName = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: var(--white);
  margin-bottom: 7px;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  top: 17px;
  left: 17px;
  position: absolute;
`;

const PostText = styled.p`
  height: 52px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  color: #b7b7b7;
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
`;

const LinkDetailsDescriptionContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 64%;
`;

const LinkDetailsImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 154px;
  border-radius: 0 12px 13px 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const LinkDetailsTitle = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
  margin-bottom: 5px;
`;

const LinkDetailsDescription = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 13px;

  color: #9b9595;
`;

const Link = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

  color: #cecece;
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
  Link,
  PostWarning,
};
