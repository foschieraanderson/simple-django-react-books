import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

import { ContextProvider } from './Contexts/Context';
import Route from './routes';

function App() {
	return (
		<ContextProvider>
			<Route />
		</ContextProvider>
	);
}

export default App;
