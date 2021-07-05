import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Context } from '../../Contexts/Context';

import NewAuthorModal from '../../Components/NewAuthorModal';
import Header from '../../Components/Header';

import './styles.css';

export default function Authors() {

  const {authors, deleteAuthor} = useContext(Context)

  const [isNewAuthorModalOpen, setIsNewAuthorModalOpen] = useState(false)
  const [idAuthor, setIdAuthor] = useState(null)

  function handleOpenNewAuthorModal(id_author) {
	setIsNewAuthorModalOpen(true);
	if(id_author !== null) {
	  setIdAuthor(id_author);
      console.log(id_author)
	} else {
	  setIdAuthor(null);
	}	  
  }

  function handleCloseNewAuthorModal() {
	setIsNewAuthorModalOpen(false);
  }

  function handleDeleteAuthor(author) {
    if(author) {
      deleteAuthor(author)
    }
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
								<button className="action edit" onClick={() => handleOpenNewAuthorModal(author.id)}><FiEdit size={18} /></button>
                                <button className="action delete" onClick={() => handleDeleteAuthor(author)}><FiTrash2 size={18} /></button>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</section>

			<NewAuthorModal isOpen={isNewAuthorModalOpen} onRequestClose={handleCloseNewAuthorModal	} id={idAuthor} />
		</div>
  );
}
