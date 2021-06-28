import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { Context } from "../../Contexts/Context";

export default function NewAuthorModal({ isOpen, onRequestClose, id=null }) {

    const { createAuthor } = useContext(Context)
    
    const [name, setName] = useState('')

    async function handleCreateNewAuthor(event) {
        event.preventDefault();

        const data = {
            'name': name
        }
        await createAuthor(data)

        onRequestClose();
        setName('')
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="close-modal"><FiX /></button>
            <div className="box-modal">
                <h2>{id !== null ? "Editar Autor" : "Cadastrar Autor"}</h2>
                <form onSubmit={handleCreateNewAuthor}>
                    <input className="form-control" value={name} onChange={event => setName(event.target.value)} placeholder="Nome" required />
                    <button className="btn-modal" type="submit">Salvar</button>
                </form>
            </div>
        </Modal>
    );
}