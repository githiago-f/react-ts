import React from 'react';
import { shallow } from 'enzyme';
import { Container } from 'styles/Container';

const container = <Container/>;

test('renders correctly', () => {
    shallow(container);
});
