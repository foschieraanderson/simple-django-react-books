import React from "react";
import Modal from "react-modal";

export default function NewBookModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className="box-modal">
                <h2>Cadastrar Livro</h2>
                <form>
                    <input className="form-control" name="titulo" placeholder="Título" required />
                    <select className="form-control" id="authores" required>
                        <option value="">Autores</option>
                    </select>
                    <select className="form-control" id="categories" required>
                        <option value="">Categoria</option>
                    </select>
                    <button className="btn-modal" type="submit">Salvar</button>
                </form>
            </div>
        </Modal>
    );
}