import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { Context } from "../../Contexts/Context";

export default function NewCategoryModal({ isOpen, onRequestClose, id=null }) {

    const { createCategory } = useContext(Context)
    
    const [name, setName] = useState('')

    async function handleCreateNewCategory(event) {
        event.preventDefault();

        const data = {
            'name': name
        }
        await createCategory(data)

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
                <h2>{id !== null ? "Editar Categoria" : "Cadastrar Categoria"}</h2>
                <form onSubmit={handleCreateNewCategory}>
                    <input className="form-control" value={name} onChange={event => setName(event.target.value)} placeholder="Nome" required />
                    <button className="btn-modal" type="submit">Salvar</button>
                </form>
            </div>
        </Modal>
    );
}
