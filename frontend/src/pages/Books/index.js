import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Modal, Button } from 'react-bootstrap';

import Header from '../../Components/Header';

import api from '../../services/api';

// import handleDelete from '../../utils';

import './styles.css';

export default function Books() {

	const [books, setBooks] = useState([]);

	const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	function handleDelete(book) {
		handleShow()

		alert('Livro com ID '+book.id+' deletado com sucesso');
	}

	useEffect(() => {
		try {
			api.get('/books/')
			.then(response => {
				setBooks(response.data);
			})
		} catch(error) {
			console.log(error);
		}
	},[]);

	return (
		<div className="container">
			
			<Header />

			<section>
				<table>
					<thead>
						<tr>
							<td>#</td>
							<td>Livro</td>
							<td>Autor</td>
							<td>Categoria</td>
							<td>Ações</td>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<td>#</td>
							<td>Livro</td>
							<td>Autor</td>
							<td>Categoria</td>
							<td>Ações</td>
						</tr>
					</tfoot>

					<tbody>
						{books.map(book => (
						<tr key={book.id}>
							<td>{book.id}</td>
							<td>{book.name}</td>
							<td>
								{book.author}
							</td>
							<td>
								{book.category}
							</td>
							<td>
								<Link className="action edit" to="/edit"><FiEdit size={18} /></Link> 
								{/* <Link className="action delete" to="/delete"><FiTrash2 size={18} /></Link> */}
								<Button onClick={() => handleDelete(book)} className="action delete"><FiTrash2 size={18} /></Button>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</section>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Atenção</Modal.Title>
				</Modal.Header>
				<Modal.Body>Você tem certeza que deseja apagar esse item?<br/>
							Essa ação não poderá ser desfeita.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="dark" onClick={handleClose}>
						Cancelar
					</Button>
					<Button variant="danger">
						Sim
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}