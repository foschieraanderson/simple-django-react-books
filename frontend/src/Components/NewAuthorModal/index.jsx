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
            <h2>Cadastrar Autor</h2>
        </Modal>
    );
}