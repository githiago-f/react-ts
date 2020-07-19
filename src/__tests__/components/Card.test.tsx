import React from 'react';
import {CardProject} from 'styles/Card';
import { shallow } from 'enzyme';

const comp = (
    <CardProject
        title="Titulo do projeto"
        lang="javascript"
        description="Descrição do projeto"
        href="#"
    />
);

test('renders properly', () => {
    shallow(comp);
});

test('does contain the corect description rendered.', ()=> {
    const card = shallow(comp);
    const description = (
        <p style={{maxWidth: 380 }}>
            Descrição do projeto
        </p>
    );
    expect(card.contains(description)).toBe(true);
});
