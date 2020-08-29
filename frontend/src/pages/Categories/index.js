import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import Header from '../../Components/Header';

import api from '../../services/api';

import './styles.css';

export default function Categories() {
  
  const [categories, setCategories] = useState([]);

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
			<Header />

			<section>
				<table>
					<thead>
						<tr>
							<td>#</td>
							<td>Categoria</td>
							<td></td>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<td>#</td>
							<td>Categoria</td>
							<td></td>
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
		</div>
  );
}