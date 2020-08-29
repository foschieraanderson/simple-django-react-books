import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Modal, Button } from 'react-bootstrap';

function Header() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <h1 className="primary-title">Simple Django React Books</h1>
        <header>
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" className="link-pages" to="/authors">Autores</NavLink></li>
                    <li><NavLink exact={true} activeClassName="active" className="link-pages" to="/">Livros</NavLink></li>
                    <li><NavLink activeClassName="active" className="link-pages" to="/categories">Categorias</NavLink></li>
                </ul>
            </nav>
            <Button onClick={handleShow} className="add" ><FiPlus size={18} /> Adicionar</Button>
        </header>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Atenção</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default Header;