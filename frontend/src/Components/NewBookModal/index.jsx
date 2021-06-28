import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { Context } from "../../Contexts/Context";

import api from "../../services/api";

export default function NewBookModal({ isOpen, onRequestClose }) {

    const { authors, categories, createBook } = useContext(Context)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')

    async function handleCreateNewBook(event) {
        event.preventDefault();
        
        const data = {
        "name": title,
        "author": author,
        "category": category
        }
        
        await createBook(data)

        onRequestClose();
        setTitle('')
        setAuthor('')
        setCategory('')
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
                <h2>Cadastrar Livro</h2>
                <form onSubmit={handleCreateNewBook}>
                    <input className="form-control" value={title} onChange={event => setTitle(event.target.value)} placeholder="Título" required />
                    <select className="form-control" value={author} onChange={event => setAuthor(event.target.value)} required>
                        <option value="">Autores</option>
                        {authors.map(author => (
                            <option key={author.id} value={ author.id }>{ author.name }</option>
                        ))}
                    </select>
                    <select className="form-control" value={category} onChange={event => setCategory(event.target.value)} required>
                        <option value="">Categoria</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                    <button className="btn-modal" type="submit">Salvar</button>
                </form>
            </div>
        </Modal>
    );
}
