import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Context } from '../../Contexts/Context';

import Header from '../../Components/Header';
import NewBookModal from '../../Components/NewBookModal';

import './styles.css';

export default function Books() {

	const { books } = useContext(Context)

	const [isNewBookModalOpen, setIsNewBookModalOpen] = useState(false)

    function handleOpenNewBookModal() {
        setIsNewBookModalOpen(true);
    }

    function handleCloseNewBookModal() {
        setIsNewBookModalOpen(false);
    }

	return (
		<div className="container">
			
			<Header onOpenNewModal={handleOpenNewBookModal} />

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
								<Link className="action delete" to="/delete"><FiTrash2 size={18} /></Link>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</section>
			<NewBookModal isOpen={isNewBookModalOpen} onRequestClose={handleCloseNewBookModal} />
		</div>
	);
}