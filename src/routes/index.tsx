import React from 'react';
import { Provider } from 'styles/theme/provider';
import { Home } from 'pages';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

export const Routes = () => {
	return (
		<Provider>
            <Home/>
		</Provider>
	);
};
