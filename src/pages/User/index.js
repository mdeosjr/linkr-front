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
import {
  Comment,
  CommentBox,
  Comments,
  CommentsContainer,
  CommentText,
  CommentUserBox,
  CommentUserDetails,
  CommentUserIcon,
  CommentUserName,
  CreateComment,
  QntComments,
} from "../../components/Comments.js";
import Header from "../../components/Header/index.js";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";
import {
  ButtonConfirm,
  ButtonDelete,
  Form,
} from "../../components/Modal/style.js";
import { InputText } from "../../components/PublishPost.js";
import FlexDiv from "../../components/FlexDiv.js";
import editIcon from "../../assets/EditIcon.svg";
import deleteIcon from "../../assets/DeleteIcon.svg";
import { Edit, Agroup, Delete } from "../../components/InteractionBox.js";
import SyncLoader from "react-spinners/PulseLoader";
import SearchBarTimeline from "../../components/SearchBarTimeline/index.js";
import ReactHashtag from "react-hashtag";
import { Icon, Likes, QntLikes } from "../../components/Likes.js";
import HeartFilled from "../../assets/HeartFilled.svg";
import HeartOutlined from "../../assets/HeartOutlined.svg";
import CommentsIcon from "../../assets/CommentsIcon.svg";
import PaperPlane from "../../assets/PaperPlane.svg";
import HashtagsSidebar from "../../components/HashtagsSidebar/index.js";
import { MainContainer } from "../../components/MainContainer.js";
import { PostsContainer } from "../../components/PostsContainer.js";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { ButtonFollow } from "../../components/ButtonFollow/index.js";
import ModalDelete from "../../components/Modal/index.js";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [postId, setPostId] = useState("");
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [ativo, setAtivo] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [postWithComments, setPostWithComments] = useState();
  const [newComment, setNewComment] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [deletePostId,setDeletePostId]=useState(null);

  const { hashtag } = useParams();
  const { id } = useParams();

  const { auth, attPage, setAttPage } = useAuth();
  const navigate = useNavigate();

  Modal.setAppElement(document.querySelector(".root"));
  function openModal(id) {    
    setModalIsOpen(true);
    setDeletePostId(id);
  }

  
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
  }, [attPage, postWithComments, postComments]);

  async function handleDelete(id) {
    setModalIsOpen(false);
    setIsLoading(true);
    try {
      await api.deletePost(id, auth.token);
      setIsLoading(false);
      setAttPage(!attPage);
    } catch (error) {
      alert("Erro ao deletar o post, tente novamente.");
      setIsLoading(false);
    }
  }

  function changePost(id, postText) {
    setEdit(!edit);
    setPostId(id);
    setText(postText);
  }

  function submitEditPost(newText) {
    const promise = api.editPost(postId, auth.token, newText);
    promise.then(() => {
      setDisabled(false);
      setEdit(false);
      setAtivo(true);
      setPostId("");
      setAttPage(!attPage);
    });
    promise.catch((error) => console.log(error));
  }

  function handlerKey(e) {
    if (e.keyCode === 13) {
      setDisabled(true);
      setAtivo(!ativo);
      submitEditPost(text);
    }
    if (e.keyCode === 27) {
      setDisabled(false);
      setAtivo(!ativo);
      setEdit(false);
      setPostId("");
    }
  }


  async function handleLike(postIdLiked, liked) {
    try {
      liked
        ? await api.deleteLike(auth.token, postIdLiked)
        : await api.postLike(auth.token, postIdLiked);
      setAttPage(!attPage);
    } catch (error) {
      alert("Ocorreu um erro. Tente novamente.");
    }
  }

  async function handleCommentsDisplay(postId) {
    const comments = await api.getPostComments(auth.token, postId);
    setPostComments(comments.data);
    if (postWithComments === postId) {
      setPostWithComments(0);
    } else {
      setPostWithComments(postId);
    }
  }

  async function createComment(postId) {
    const promise = api.createComment(auth.token, postId, auth.id, newComment);

    setNewComment("");

    promise.then((response) => {
      console.log(response);
      const updatedComments = api.getPostComments(auth.token, postId);
      updatedComments.then((comments) => {
        console.log(comments.data);
        setPostComments(comments.data);
      });
    });
    promise.catch((error) => {
      console.log(error);
    });
  }
  console.log("postsUsers", posts);

  return (
    <>
    <ModalDelete
        deletePostId={deletePostId}
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setDeletePostId={setDeletePostId}
        attPage={attPage}
        setAttPage={setAttPage}
      />
      <Header />
      <FeedContainer>
        <SearchBarTimeline></SearchBarTimeline>
        <PageTitle>
          {posts[0]?.name}'s posts
          {posts[0]?.userId === auth.id ? (
            ""
          ) : (
            <ButtonFollow followingId={id} />
          )}
          {console.log("postsId", posts[0]?.userId)}
        </PageTitle>
        <MainContainer>
          <PostsContainer>
            {loading ? <Loader /> : ""}
            {posts.length === 0 &&
              serverError === false &&
              loading === false ? (
              <PostWarning>There are no posts yet</PostWarning>
            ) : (
              ""
            )}
            {serverError ? (
              <PostWarning>
                An error occured while trying to fetch the posts, please refresh
                the page
              </PostWarning>
            ) : (
              posts.map((post) => (
                <>
                  <Post active={true} key={post.postId}>
                    <FlexDiv>
                      <UserName
                        onClick={() => navigate(`/user/${post.userId}`)}
                      >
                        {post.name}
                      </UserName>
                      {post.userId === auth.id ? (
                        <Agroup>
                          <Edit
                            src={editIcon}
                            onClick={() => changePost(post.postId, post.text)}
                          />
                          <Delete
                            src={deleteIcon}
                            onClick={() => openModal(post.postId)}
                          />
                        </Agroup>
                      ) : (
                        ""
                      )}
                    </FlexDiv>
                    {edit && postId === post.postId ? (
                      <InputText
                        autoFocus
                        onFocus={(e) => e.currentTarget.select()}
                        height={"50px"}
                        ativo={ativo}
                        disabled={disabled}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => handlerKey(e)}
                      />
                    ) : (
                      <PostText>{post.text}</PostText>
                    )}
                    <UserImg src={post.image} />
                    <Likes>
                      <Icon
                        src={post.liked ? HeartFilled : HeartOutlined}
                        onClick={() => handleLike(post.postId, post.liked)}
                      />
                      {post.usersLikes.length === 0 ? (
                        <QntLikes>{post.likes} likes</QntLikes>
                      ) : (
                        <Tooltip
                          data-tip={
                            post.usersLikes.length > 2
                              ? `${post.usersLikes[0]}, ${post.usersLikes[1]
                              } e outras ${post.usersLikes.length - 2
                              } pessoas`
                              : post.usersLikes.length === 2
                                ? `${post.usersLikes[0]} e ${post.usersLikes[1]} curtiram`
                                : `${post.usersLikes[0]} curtiu`
                          }
                        >
                          <QntLikes>{post.likes} likes</QntLikes>
                        </Tooltip>
                      )}
                      <ReactTooltip
                        place="bottom"
                        type="light"
                        effect="float"
                      />
                    </Likes>
                    <Comments
                      onClick={() => {
                        handleCommentsDisplay(post.postId);
                      }}
                    >
                      <Icon src={CommentsIcon} />

                      <QntComments>
                        {post.comments} <p>comments</p>
                      </QntComments>
                    </Comments>
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
                  <CommentsContainer
                    active={postWithComments === post.postId ? true : false}
                  >
                    {postWithComments === post.postId
                      ? postComments.map((comment) => (
                        <Comment key={comment.id}>
                          <CommentUserIcon src={comment.commentAuthorImage} />
                          <CommentBox>
                            <CommentUserBox>
                              <CommentUserName>
                                {comment.commentAuthorName}
                              </CommentUserName>
                              <CommentUserDetails>
                                {post.userId === comment.userId
                                  ? `• post’s author`
                                  : comment.following === true
                                    ? `• following`
                                    : ""}
                              </CommentUserDetails>
                            </CommentUserBox>
                            <CommentText>{comment.textComment}</CommentText>
                          </CommentBox>
                        </Comment>
                      ))
                      : ""}

                    <CreateComment>
                      <CommentUserIcon src={auth.image} />
                      <input
                        id="commentInput"
                        type="text"
                        placeholder="write a comment..."
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                      ></input>
                      <button
                        type="submit"
                        onClick={() => {
                          createComment(post.postId);
                        }}
                      >
                        <img src={PaperPlane} alt="Send" />
                      </button>
                    </CreateComment>
                  </CommentsContainer>
                </>
              ))
            )}
          </PostsContainer>
          <HashtagsSidebar
            attPage={attPage}
            setAttPage={setAttPage}
            setPosts={setPosts}
            hashtagPost={hashtag}
          />
        </MainContainer>
      </FeedContainer>
    </>
  );
}

const Tooltip = styled.a``;

const customStyles = {
  content: {
    width: "597px",
    height: "262px",
    fontSize: "34px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "#333333",
    borderRadius: "50px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#FFFFFF",
    textAlign: " center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
