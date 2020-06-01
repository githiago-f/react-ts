import React from 'react';
import { Provider } from 'styles/theme/provider';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

export const Routes = () => {
	return (
		<Provider>
			<Router history={customHistory}>
				<Switch>
					<Route path="/" exact>
						<Home/>
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
};
