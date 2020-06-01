import React from 'react';
import { Base } from 'types/props';
import { Container } from 'styles/Defaults';
import { SideBar } from 'styles/SideBar';
import { Content } from 'styles/Content';

export const Template: React.FC<Base> = (props) => {
	return(
		<Container>
            <div className="row">
                <SideBar/>
                <Content>
                    {props?.children}
                </Content>
            </div>
		</Container>
	);
};
