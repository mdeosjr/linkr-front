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
  TrashIcon
} from "../../components/Post.js";
import PublishPostForm from './PublishPostForm';
import Header from "../../components/Header/index.js";
import trash from "../../assets/lixeira.svg";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";
import { ModalDelete } from "../Modal/Modal.js";
import { ButtonConfirm, ButtonDelete, ContainerModal, Form } from "../Modal/style.js";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { auth } = useAuth();

  Modal.setAppElement(document.querySelector('.root'));
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(true);
}

  

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

  async function handleDelete(id) {
    console.log(id);
    setModalIsOpen(false);
    setLoading(false)
    try {
      await api.deletePost(id, auth.token);
      setLoading(true);

    } catch (error) {
      alert('erro ao deletar o post');
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
              <StyledLink href={post.link} target="_blank">
                <UserName>{post.userName}</UserName>
                <TrashIcon src={trash} alt="lixeira" onClick={() => openModal()} />
                <ModalDelete modalIsOpen={modalIsOpen} handleDelete={handleDelete} id={post.id} closeModal={closeModal} /> 
                     
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'none',
    boder: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

