import styled from 'styled-components';
import { ThemeProps } from 'types/theme';

export const Title = styled.h2<ThemeProps>`
    color: ${prop => prop.theme.darkThemeOn ? prop.theme.theme.font.dark : prop.theme.theme.font.light };
`;

export const Subtitle = styled.h4<ThemeProps>`
    color: ${prop => prop.theme.darkThemeOn ? prop.theme.theme.font.dark : prop.theme.theme.font.light };
`;
