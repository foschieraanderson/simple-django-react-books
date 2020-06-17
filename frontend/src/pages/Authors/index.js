import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Authors() {
  
  const [authors, setAuthors] = useState([]);

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

  return (
		<div className="container">
			<h1 className="primary-title">Simple Django React App</h1>
			<header>
				<nav>
					<ul>
						<li><Link className="link-pages" to="/authors">Autores</Link></li>
						<li><Link className="link-pages" to="/">Livros</Link></li>
						<li><Link className="link-pages" to="/categories">Categorias</Link></li>
					</ul>
				</nav>
				<Link className="add" to="/create"><FiPlus size={18} /> Adicionar</Link>
			</header>

			<section>
				<table>
					<thead>
						<tr>
							<td>#</td>
							<td>Autor</td>
							<td></td>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<td>#</td>
							<td>Autor</td>
							<td></td>
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
		</div>
  );
}