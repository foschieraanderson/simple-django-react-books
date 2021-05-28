import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import NewCategoryModal from '../../Components/NewCategoryModal';

import Header from '../../Components/Header';

import api from '../../services/api';

import './styles.css';

export default function Categories() {
  
  const [categories, setCategories] = useState([]);

  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false)

  function handleOpenNewCategoryModal() {
      setIsNewCategoryModalOpen(true);
  }

  function handleCloseNewCategoryModal() {
      setIsNewCategoryModalOpen(false);
  }

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
		<div className="container">
			<Header onOpenNewModal={handleOpenNewCategoryModal} />

			<section>
				<table>
					<thead>
						<tr>
							<td>#</td>
							<td>Categoria</td>
							<td>Ações</td>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<td>#</td>
							<td>Categoria</td>
							<td>Ações</td>
						</tr>
					</tfoot>

					<tbody>
						{categories.map(category => (
						<tr key={category.id}>
							<td>{category.id}</td>
							<td>{category.name}</td>
							<td>
								<Link className="action edit" to="/edit"><FiEdit size={18} /></Link>
								<Link className="action delete" to="/delete"><FiTrash2 size={18} /></Link>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</section>
			<NewCategoryModal isOpen={isNewCategoryModalOpen} onRequestClose={handleCloseNewCategoryModal} />
		</div>
  );
}