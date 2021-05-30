import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Context } from '../../Contexts/Context';

import NewAuthorModal from '../../Components/NewAuthorModal';
import Header from '../../Components/Header';

import './styles.css';

export default function Authors() {

  const {authors} = useContext(Context)

  const [isNewAuthorModalOpen, setIsNewAuthorModalOpen] = useState(false)
  
  function handleOpenNewAuthorModal() {
  	setIsNewAuthorModalOpen(true);
  }

  function handleCloseNewAuthorModal() {
	setIsNewAuthorModalOpen(false);
  }

  return (
		<div className="container">

			<Header onOpenNewModal={handleOpenNewAuthorModal} />

			<section>
				<table>
					<thead>
						<tr>
							<td>#</td>
							<td>Autor</td>
							<td>Ações</td>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<td>#</td>
							<td>Autor</td>
							<td>Ações</td>
						</tr>
					</tfoot>

					<tbody>
						{authors.map(author => (
						<tr key={author.id}>
							<td>{author.id}</td>
							<td>{author.name}</td>
							<td>
								<Link className="action edit" to="/edit"><FiEdit size={18} /></Link>
								<Link className="action delete" to="/delete"><FiTrash2 size={18} /></Link>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</section>

			<NewAuthorModal isOpen={isNewAuthorModalOpen} onRequestClose={handleCloseNewAuthorModal	} />
		</div>
  );
}