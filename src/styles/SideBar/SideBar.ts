import styled from 'styled-components';
import {ThemeProps} from 'types/theme';

export const SideBarContainer = styled.div.attrs({
	className: 'col-12 col-sm-12 col-md-3 col-lg-3 text-center'
})<ThemeProps>`
    background-color: ${props => props.theme.darkThemeOn ? '#343a40' : props.theme.theme.bg.light};
`;

export const Description = styled.div.attrs({
	className:'card card-body'
})<ThemeProps>`
    background-color: ${props => props.theme.darkThemeOn ? props.theme.theme.bg.dark : '#fff'};
`;
