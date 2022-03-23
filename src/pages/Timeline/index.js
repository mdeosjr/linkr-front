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

export default function Timeline() {
  return (
    <>
      <Header />
      <FeedContainer>
        <PageTitle>timeline</PageTitle>
        <PublishPostForm></PublishPostForm>
        <Post>
          <UserName> Juvenal Juvencio</UserName>
          <PostText>
            Muito maneiro esse tutorial de Material UI com React, deem uma
            olhada!
          </PostText>
          <UserImg src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" />
          <LinkDetailsContainer>
            <LinkDetailsDescriptionContainer>
              <LinkDetailsTitle>
                Como aplicar o Material UI em um projeto React
              </LinkDetailsTitle>
              <LinkDetailsDescription>
                Hey! I have moved this tutorial to my personal blog. Same
                content, new location. Sorry about making you click through to
                another page.
              </LinkDetailsDescription>
              <Link>https://medium.com/@pshrmn/a-simple-react-router</Link>
            </LinkDetailsDescriptionContainer>
            <LinkDetailsImg src="https://images.unsplash.com/photo-1647792646239-23de8b61867e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </LinkDetailsContainer>
        </Post>
        <Loader />
        <PostWarning>There are no posts yet</PostWarning>
        <PostWarning>
          An error occured while trying to fetch the posts, please refresh the
          page
        </PostWarning>
      </FeedContainer>
    </>
  );
}