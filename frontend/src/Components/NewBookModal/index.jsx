import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import api from "../../services/api";

export default function NewBookModal({ isOpen, onRequestClose }) {

    const [ authors, setAuthors ] = useState([])
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        try {
          api.get('/authors/')
          .then(response => {
            setAuthors(response.data);
          })
        } catch(error) {
          console.log(error);
        }
      },[]);

      useEffect(() => {
        try {
          api.get('/categories/')
          .then(response => {
            setCategories(response.data);
          })
        } catch(error) {
          console.log(error);
        }
      },[]);

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
                        {authors.map(author => (
                            <option key={author.id} value={ author.id }>{ author.name }</option>
                        ))}
                    </select>
                    <select className="form-control" id="categories" required>
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