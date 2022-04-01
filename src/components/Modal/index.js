import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { ButtonConfirm, ButtonDelete, Form } from "./style";
import SyncLoader from "react-spinners/PulseLoader";

export default function ModalConfirm({ isLoading, modalIsOpen, deletePostId, setModalIsOpen, setIsLoading, setDeletePostId, attPage, setAttPage, repostId, setRepostId }) {
    const navigate = useNavigate();
    const { auth } = useAuth();

    function closeModal() {
        setModalIsOpen(!modalIsOpen);
    }
    async function handleDelete(id) {
        setIsLoading(true);
        try {
            await api.deletePost(id, auth.token);
            setIsLoading(false);
            setDeletePostId(null);
            setModalIsOpen(false);
            setAttPage(!attPage);
        } catch (error) {
            alert("Erro ao deletar o post, tente novamente.");
            setIsLoading(false);
        }
    }
    function handlePosts() {
        setModalIsOpen(false);
        navigate("/timeline");
    }

    async function handleRepost(id) {
        setIsLoading(true);
        try {
            await api.createRepost(auth.token, id);
            setIsLoading(false);
            setModalIsOpen(false);
            setRepostId(null);
            setAttPage(!attPage);
        } catch (error) {
            alert("Ocorreu um erro ao repostar");
            setIsLoading(false);
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            
            <h1>
                Are you sure you want <br /> to {repostId ? 're-post this link' :
                'delete this post'}?
            </h1>

            <Form>
                <ButtonConfirm onClick={() => handlePosts()}>
                    no, go back
                </ButtonConfirm>
                <ButtonDelete
                    onClick={() => 
                        repostId ? handleRepost(repostId) 
                        : deletePostId ? handleDelete(deletePostId) : handlePosts()
                    }
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <SyncLoader color="white" size={5} />
                    ) : (
                        repostId ? "Yes, share!" :
                        "yes, delete it"
                    )}
                </ButtonDelete>
            </Form>
        </Modal>
    );
}
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
