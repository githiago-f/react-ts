import React from 'react';
import { Base } from 'types/props';
import { Container } from 'styles/Defaults';
import { SideBar } from 'styles/SideBar';

export const Template: React.FC<Base> = (props) => {
	return(
		<Container>
			<SideBar/>
			{/* there will be my projects */}
		</Container>
	);
};
