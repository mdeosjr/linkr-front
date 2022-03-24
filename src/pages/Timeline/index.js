import Loader from "../../components/Loader.js";
import { FeedContainer } from "../../components/FeedContainer";
import { PageTitle } from "../../components/PageTitle";
import {
  LinkParagraph,
  LinkDetailsContainer,
  LinkDetailsDescription,
  LinkDetailsDescriptionContainer,
  LinkDetailsImg,
  LinkDetailsTitle,
  Post,
  PostText,
  PostWarning,
  StyledLink,
  UserImg,
  UserName,
} from "../../components/Post.js";
import PublishPostForm from './PublishPostForm';
import Header from "../../components/Header/index.js";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth !== undefined) {
      const promise = api.getTimelinePosts(auth.token);
      promise.then((response) => {
        setServerError(false);
        setLoading(false);
        setPosts(response.data);
      });

      promise.catch((error) => {
        console.log(error);
        setServerError(true);
        setLoading(false);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <>
      <Header />
      <FeedContainer>
        <PageTitle>timeline</PageTitle>
        <PublishPostForm></PublishPostForm>
        {loading ? <Loader /> : ""}
        {posts.length === 0 && serverError === false && loading === false ? (
          <PostWarning>There are no posts yet</PostWarning>
        ) : (
          ""
        )}
        {serverError ? (
          <PostWarning>
            An error occured while trying to fetch the posts, please refresh the
            page
          </PostWarning>
        ) : (
          posts.map((post) => (
            <Post key={post.id}>
              <StyledLink href={post.link} target="_blank">
                <UserName>{post.userName}</UserName>
                <PostText>{post.textPost}</PostText>
                <UserImg src={post.userImage} />
                <LinkDetailsContainer>
                  <LinkDetailsDescriptionContainer>
                    <LinkDetailsTitle>{post.linkTitle}</LinkDetailsTitle>
                    <LinkDetailsDescription>
                      {post.linkDescription}
                    </LinkDetailsDescription>
                    <LinkParagraph>{post.link}</LinkParagraph>
                  </LinkDetailsDescriptionContainer>
                  <LinkDetailsImg src={post.linkImage} />
                </LinkDetailsContainer>
              </StyledLink>
            </Post>
          ))
        )}
      </FeedContainer>
    </>
  );
}