import React from 'react';
import { Template } from 'styles/theme/Template';
import { Title } from 'styles/Title';
import { CardProject } from 'styles/Card';
import { Row } from 'styles/Row';
import { Description } from 'styles/SideBar/SideBar';
import { useHomeHooks } from './hooks';
import ReactMarkdown from 'react-markdown';

export const Home = () => {
    const { cards, markdown } = useHomeHooks();

    return (
        <Template>
            <Description>
                <ReactMarkdown source={markdown}/>
            </Description>
            <div className="py-5">
                <Title>Meus projetos</Title>
            </div>
            <Row>
                {cards.map((i, id)=> <CardProject key={id} {...i} />)}
            </Row>
            <Description>
                <p>
                    Icons made by{' '}
                    <a href="https://creativemarket.com/Becris" title="Becris">Becris</a>{' '}
                    from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </p>
            </Description>
        </Template>
    );
};
