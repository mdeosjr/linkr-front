import Loader from "../../components/Loader.js";
import { FeedContainer } from "../../components/FeedContainer";
import { PageTitle } from "../../components/PageTitle";
import { UserImage, UserHeader } from "../../components/User";
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
  UserImg,
  UserName,
} from "../../components/Post.js";
import Header from "../../components/Header/index.js";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const { id } = useParams();  
  const { auth } = useAuth();
  console.log(posts)

  useEffect(() => {
    if (auth !== undefined) {
      const promise = api.getUserPosts(auth.token, id);
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
  }, []);

  return (
    <>
      <Header />
      <FeedContainer>
        {/* <UserHeader>
            <UserImage src={posts[0].image}/>
            <PageTitle>{`${posts[0].name}'s posts`}</PageTitle>
        </UserHeader> */}
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
          posts.reverse().map((post) => (
            <Post key={post.id}>
                <UserName>{post.name}</UserName>
                <PostText>{post.text}</PostText>
                <UserImg src={post.image} />
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
            </Post>
          ))
        )}
      </FeedContainer>
    </>
  );
}