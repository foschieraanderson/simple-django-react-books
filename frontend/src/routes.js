import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Books from './pages/Books';
import NewBooks from './pages/NewBooks';
import Authors from './pages/Authors';
import Categories from './pages/Categories';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Books} />
				<Route path='/books/new' component={NewBooks} />
				<Route path='/authors' component={Authors} />
				<Route path='/categories' component={Categories} />
			</Switch>
		</BrowserRouter>
	)
}