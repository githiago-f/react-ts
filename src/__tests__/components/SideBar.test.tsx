import React from 'react';
import { SideBar } from 'styles/SideBar';
import { shallow } from 'enzyme';

test('renders correctly', () => {
    shallow(<SideBar/>);
});
