import React, { useState, useEffect } from 'react';
import { Template } from 'styles/theme/Template';
import { Title } from 'styles/Title';
import { CardProject } from 'styles/Card';
import { Row } from 'styles/Row';
import { TCard } from 'types/cards';
import { getRepos } from 'service/github.api';

export const Home = () => {
    const [cards, setCards] = useState([] as TCard[])

    useEffect(() => {
        getRepos().then(data => {
            const myCards = data.map(card => ({
                lang: card.language.toLowerCase().trim(),
                description: card.description,
                title: card.name,
                href: card.html_url
            }));
            setCards(myCards)
        });
    }, []);

	return (
		<Template>
			<Title>Meus projetos</Title>
            <Row>
                {cards.map((i, id)=> <CardProject key={id} {...i} />)}
            </Row>
            <div className='card card-body'>
            Icons made by <a href="https://creativemarket.com/Becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
		</Template>
	);
};
