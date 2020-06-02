import React from 'react';
import { Base } from 'types/props';
import { Container } from 'styles/Container';
import { SideBar } from 'styles/SideBar';
import { Content } from 'styles/Content';
import { PageContent } from 'styles/Page';

export const Template: React.FC<Base> = (props) => {
	return(
		<Container>
            <div className="row">
                <SideBar/>
                <Content>
                    <PageContent>
                        {props?.children}
                    </PageContent>
                </Content>
            </div>
		</Container>
	);
};
