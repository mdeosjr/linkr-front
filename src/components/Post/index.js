import styled from 'styled-components';
import {
  PostComponent,
  UserImg,
  LinkDetailsContainer,
  PostText,
  UserName,
  LinkDetailsDescriptionContainer,
  LinkDetailsImg,
  LinkDetailsTitle,
  LinkDetailsDescription,
  LinkParagraph,
  StyledLink
} from "./style";
import Modal from "react-modal";
import {
  ButtonConfirm,
  ButtonDelete,
  Form,
} from "../../components/Modal/style.js";
import FlexDiv from "../../components/FlexDiv.js";
import editIcon from "../../assets/EditIcon.svg";
import deleteIcon from "../../assets/DeleteIcon.svg";
import { Edit, Agroup, Delete } from "../../components/InteractionBox.js";
import { Icon, Likes, QntLikes } from "../../components/Likes.js";
import HeartFilled from "../../assets/HeartFilled.svg";
import HeartOutlined from "../../assets/HeartOutlined.svg";
import CommentsIcon from "../../assets/CommentsIcon.svg";
import PaperPlane from "../../assets/PaperPlane.svg";
import ReactTooltip from "react-tooltip";
import ReactHashtag from "react-hashtag";
import SyncLoader from "react-spinners/PulseLoader";
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
import { InputText } from "../../components/PublishPost.js";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ post, offset, hashtag }) {
    const { auth } = useAuth();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [deletePostId, setDeletePostId] = useState(null);
    const [edit, setEdit] = useState(false);
    const [postId, setPostId] = useState("");
    const [text, setText] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [ativo, setAtivo] = useState(true);
    const [postWithComments, setPostWithComments] = useState();
    const [postComments, setPostComments] = useState([]);
    const [newComment, setNewComment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    }, [postWithComments, postComments])

    Modal.setAppElement(document.querySelector(".root"));

    function openModal(id) {
        setModalIsOpen(true);
        setDeletePostId(id);
    }
    
    function closeModal() {
        setModalIsOpen(!modalIsOpen);
    }

    async function handleDelete(id) {
        setModalIsOpen(false);
        setIsLoading(true);
        try {
            await api.deletePost(id, auth.token);
            setIsLoading(false);
            setDeletePostId(null);
        } catch (e) {
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

    function handlePosts() {
        setModalIsOpen(false);
        navigate("/timeline");
    }

    async function handleLike(postIdLiked, liked) {
        try {
        liked
            ? await api.deleteLike(auth.token, postIdLiked)
            : await api.postLike(auth.token, postIdLiked);
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
            const updatedComments = api.getPostComments(auth.token, postId);
            updatedComments.then((comments) => {
                setPostComments(comments.data);
            });
        });
        
        promise.catch((error) => {console.log(error)});
    }

    return (
        <>
            <PostComponent>
                    <FlexDiv>
                        <UserName
                        onClick={() => navigate(`/user/${post.userId}`)}
                        >
                        {post.userName}
                        </UserName>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                        >
                            <h1>
                                Are you sure you want <br /> to delete this post?
                            </h1>
                            <Form>
                                <ButtonConfirm onClick={() => handlePosts()}>
                                    no, go back
                                </ButtonConfirm>
                                <ButtonDelete
                                    onClick={() => handleDelete(deletePostId)}
                                    disabled={isLoading}
                                >
                                {isLoading ? (
                                    <SyncLoader color="white" size={5} />
                                ) : (
                                    "yes, delete it"
                                )}
                                </ButtonDelete>
                            </Form>
                        </Modal>
                        {post.userId === auth.id && (
                            <Agroup>
                                <Edit
                                src={editIcon}
                                onClick={() => changePost(post.id, post.textPost)}
                                />
                                <Delete
                                src={deleteIcon}
                                onClick={() => openModal(post.id)}
                                />
                            </Agroup>
                        )}
                    </FlexDiv>
                    {edit && postId === post.id ? (
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
                        <PostText>
                            <ReactHashtag
                                onHashtagClick={(val) =>
                                    navigate(
                                        `/hashtag/${val.substring(1).toLowerCase()}`
                                    )
                                }
                            >
                                {post.textPost}
                            </ReactHashtag>
                        </PostText>
                    )}
                    <UserImg src={post.userImage} />
                    <Likes>
                        <Icon
                            src={post.liked ? HeartFilled : HeartOutlined}
                            onClick={() => handleLike(post.id, post.liked)}
                        />
                            {post.usersLikes.length === 0 ? (
                            <QntLikes>{post.likes} likes</QntLikes>
                        ) : (
                            <Tooltip
                                data-tip={
                                post.usersLikes.length > 2
                                    ? `${post.usersLikes[0]}, ${
                                        post.usersLikes[1]
                                    } e outras ${
                                        post.usersLikes.length - 2
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
                            handleCommentsDisplay(post.id);
                        }}
                    >
                        <Icon src={CommentsIcon} />
                        <QntComments>
                            {post.comments} comments
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
            </PostComponent>
            <CommentsContainer
                active={postWithComments === post.id ? true : false}
            >
                    {postWithComments === post.id
                        && postComments.map((comment) => (
                            <Comment key={comment.id}>
                            <CommentUserIcon
                                src={comment.commentAuthorImage}
                                onClick={() => {
                                    navigate(`/user/${comment.userId}`);
                                }}
                            />
                            <CommentBox>
                                <CommentUserBox>
                                <CommentUserName
                                    onClick={() => {
                                        navigate(`/user/${comment.userId}`);
                                    }}
                                >
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
                        ))}
                    <CreateComment>
                        <CommentUserIcon src={auth.image} />
                            <input
                                id="commentInput"
                                type="text"
                                placeholder="write a comment..."
                                onChange={(e) => setNewComment(e.target.value)}
                                value={newComment}
                            />
                            <button
                                type="submit"
                                onClick={() => {createComment(post.id)}}
                            >
                                <img src={PaperPlane} alt="Send" />
                            </button>
                    </CreateComment>
            </CommentsContainer>
        </>
    )
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
    zindex: "100",
  },
};
