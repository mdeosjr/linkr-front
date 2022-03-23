import Loader from "../../components/Loader.js";
import { FeedContainer } from "../../components/FeedContainer";
import { PageTitle } from "../../components/PageTitle";
import {
  Link,
  LinkDetailsContainer,
  LinkDetailsDescription,
  LinkDetailsDescriptionContainer,
  LinkDetailsImg,
  LinkDetailsTitle,
  Post,
  PostText,
  PostWarning,
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
  const [loading, setLoading] = useState(false);

  const { auth } = useAuth();

  useEffect(() => {
    if (auth !== undefined) {
      const promise = api.getTimelinePosts(auth.token);
      promise.then((response) => {
        setPosts(response.data);
      });

      promise.catch((error) => {
        console.log(error);
      });
    }
  }, [posts]);

  return (
    <>
      <Header />
      <FeedContainer>
        <PageTitle>timeline</PageTitle>
        <PublishPostForm></PublishPostForm>
        {posts.length === 0 ? (
          <PostWarning>There are no posts yet</PostWarning>
        ) : (
          ""
        )}
        {posts.map((post) => (
          <Post key={post.id}>
            <UserName>{post.userName}</UserName>
            <PostText>{post.textPost}</PostText>
            <UserImg src={post.userImage} />
            <LinkDetailsContainer>
              <LinkDetailsDescriptionContainer>
                <LinkDetailsTitle>{post.linkTitle}</LinkDetailsTitle>
                <LinkDetailsDescription>
                  {post.linkDescription}
                </LinkDetailsDescription>
                <Link>{post.link}</Link>
              </LinkDetailsDescriptionContainer>
              <LinkDetailsImg src={post.linkImage} />
            </LinkDetailsContainer>
          </Post>
        ))}

        <Loader />

        <PostWarning>
          An error occured while trying to fetch the posts, please refresh the
          page
        </PostWarning>
      </FeedContainer>
    </>
  );
}