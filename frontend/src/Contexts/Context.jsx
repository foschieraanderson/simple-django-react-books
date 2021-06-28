import React, { useState, useEffect, createContext } from "react";

import api from '../services/api';

export const Context = createContext([]) 

export function ContextProvider({ children }) {

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    function createBook(book) {
        api.post('/books/', book).then(response => {
            setBooks([...books, response.data])
        }).catch(err => {
            console.log(err);
        })
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
    
    function createAuthor(author) {
        api.post('/authors/', author).then(response => {
            setAuthors([...authors, response.data])
        }).catch(err => {
            console.log(err);
        })
    }

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
        <Context.Provider value={{books, authors, createAuthor, createBook, categories}}>
            {children}
        </Context.Provider>
    )
}
