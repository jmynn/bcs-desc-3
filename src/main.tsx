import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/nullstyle.css';
import './styles/global.css';
import Router from './Router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
