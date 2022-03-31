import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { ButtonConfirm, ButtonDelete, Form, StyleModal } from "./style";
import SyncLoader from "react-spinners/PulseLoader";

export default function ModalDelete({ isLoading, modalIsOpen, deletePostId, setModalIsOpen, setIsLoading, setDeletePostId, attPage, setAttPage }) {
    const navigate = useNavigate();
    const { auth } = useAuth();

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
    return (
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
