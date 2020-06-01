import React from 'react';
import {ThemeProvider} from 'styled-components';
import constants from './constants';
import { Base } from 'types/props';

export const Provider: React.FC<Base> = (props) => {
	return (
		<ThemeProvider theme={constants}>
			{props?.children}
		</ThemeProvider>
	);
};
