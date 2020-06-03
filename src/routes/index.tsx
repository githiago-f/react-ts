import React from 'react';
import { Provider } from 'styles/theme/provider';
import { Home } from 'pages';

export const Routes = () => {
	return (
		<Provider>
            <Home/>
		</Provider>
	);
};
