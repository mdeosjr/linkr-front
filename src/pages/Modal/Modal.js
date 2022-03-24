import Modal from 'react-modal'
import { ButtonConfirm, ButtonDelete, ContainerModal, Form } from './style';
export function ModalDelete(modalIsOpen ,handleDelete, closeModal, id) {   

   
return(
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
>
    <ContainerModal>
        <h1>Are you sure you want <br /> to delete this post?</h1>

        <Form >
            <ButtonConfirm>
                no, go back
            </ButtonConfirm>
            <ButtonDelete
                onClick={() => handleDelete(id)}
            >
                yes,delete it
            </ButtonDelete>
        </Form>
    </ContainerModal>
</Modal>

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