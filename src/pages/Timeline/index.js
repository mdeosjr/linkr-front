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
import { InputText } from "../../components/PublishPost.js";
import FlexDiv from "../../components/FlexDiv.js";
import editIcon from '../../assets/EditIcon.svg';
import deleteIcon from '../../assets/DeleteIcon.svg';
import { Edit, Agroup, Delete } from "../../components/InteractionBox.js";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [postId, setPostId] = useState('');
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(false);

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

  function changePost(id, postText) {
    setEdit(!edit);
    setPostId(id);
    setText(postText)
  }
  function submitEditPost(newText) {
    const promise = api.editPost(postId, auth.token, newText);
    promise.then(() => {
      setTimeout(() => {
        setDisabled(false);
        setEdit(false);
        setPostId('');
      }, 4000);
    });
    promise.catch(error => console.log(error))
  }
  function handlerKey(e) {
    if (e.keyCode === 13) {
      setDisabled(true);
      submitEditPost(text);
    }
    if (e.keyCode === 27) {
      setDisabled(false)
      setEdit(false)
      setPostId('')
    }
  }
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
              <FlexDiv>
                <UserName>{post.userName}</UserName>
                {post.userId === auth.id
                  ? <Agroup>
                    <Edit
                      src={editIcon}
                      onClick={() => changePost(post.id, post.textPost)}
                    />
                    <Delete
                      src={deleteIcon}
                    />
                  </Agroup>
                  : ''
                }
              </FlexDiv>
              {edit && postId === post.id
                ? <InputText
                  height={'50px'}
                  ativo={!!edit}
                  disabled={disabled}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => handlerKey(e)}
                />
                : <PostText>{post.id === postId ? text : post.textPost}</PostText>
              }
              <UserImg src={post.userImage} />
              <StyledLink href={post.link} target="_blank">
                <LinkDetailsContainer href={post.link} target="_blank">
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