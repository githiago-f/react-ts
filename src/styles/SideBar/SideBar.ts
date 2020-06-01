import styled from 'styled-components';

export const SideBarContainer = styled.div.attrs({
	className: 'col-12 col-sm-12 col-md-3 col-lg-3 text-center bg-light'
})`
    height: ${() => window.innerWidth > 760 ? '100%': 'fit-content'};
`;
