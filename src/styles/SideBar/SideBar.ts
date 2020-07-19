import styled from 'styled-components';
import {ThemeProps} from 'types/theme';

export const SideBarContainer = styled.div<ThemeProps>`
    background-color: ${props => props.theme.darkThemeOn ? '#343a40' : props.theme.theme.bg.light};
    width: 30vw;
    @media only screen and (max-width: 1180px) {
        width: 100%;
        min-height: fit-content;
    }
    min-height: 100vh;
    /* should be 1180px its max */
`;

export const Description = styled.div.attrs({
	className:'card card-body'
})<ThemeProps>`
    background-color: ${props => props.theme.darkThemeOn ? props.theme.theme.bg.dark : '#fff'};
`;
