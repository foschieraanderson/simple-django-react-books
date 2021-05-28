import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function Header({ onOpenNewModal }) {

    return (
        <div>
            <h1 className="primary-title">Simple Django React Books</h1>
            <header>
                <nav>
                    <ul>
                        <li><NavLink exact={true} activeClassName="active" className="link-pages" to="/">Livros</NavLink></li>
                        <li><NavLink activeClassName="active" className="link-pages" to="/authors">Autores</NavLink></li>
                        <li><NavLink activeClassName="active" className="link-pages" to="/categories">Categorias</NavLink></li>
                    </ul>
                </nav>
                <button className="add" onClick={onOpenNewModal}><FiPlus size={18} /></button>
            </header>
        </div>
    )
}

export default Header;