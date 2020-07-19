import React from 'react';
import { Content } from 'styles/Content';
import { shallow } from 'enzyme';

const container = <Content />;

test('renders correctly', () => {
    shallow(container);
});
