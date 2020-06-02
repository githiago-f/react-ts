import React, { useState, useEffect } from 'react';
import { Template } from 'styles/theme/Template';
import { Title } from 'styles/Title';
import { CardProject } from 'styles/Card';
import { Row } from 'styles/Row';
import { TCard } from 'types/cards';

export const Home = () => {
    const [cards, setCards] = useState([] as TCard[])

    useEffect(() => {
        setCards([
            {
                lang: 'javascript',
                title: 'Projecto A',
                description: 'Project Description',
                href: 'http://via.placeholder.com'
            },
            {
                lang: 'ruby',
                title: 'Projecto B',
                description: 'Project Description',
                href: 'http://via.placeholder.com'
            },
            {
                lang: 'scala',
                title: 'Projecto C',
                description: 'Project Description',
                href: 'http://via.placeholder.com'
            },
            {
                lang: 'typescript',
                title: 'Projecto D',
                description: 'Project Description',
                href: 'http://via.placeholder.com'
            },
            {
                lang: 'java',
                title: 'Projecto E',
                description: 'Project Description',
                href: 'http://via.placeholder.com'
            }
        ]);
    }, []);

	return (
		<Template>
			<Title>Meus projetos</Title>
            <Row>
                {cards.map(i=> <CardProject {...i} />)}
            </Row>
		</Template>
	);
};
