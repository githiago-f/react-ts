import React, { useState, useEffect } from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import constants from 'styles/theme/constants';
import { Base } from 'types/props';

const {bg, font} = constants.theme;

const GlobalStyle = createGlobalStyle<{darkThemeOn: boolean}>`
    .bg-darker {
        background-color: ${props => props.darkThemeOn ? bg.dark : 'white'};
    }
    p, li, span, h3 {
        color: ${props => props.darkThemeOn ? font.dark : font.light};
    }
`;

export const Provider: React.FC<Base> = (props) => {

    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkTheme(true);
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if(e.matches) {
                setDarkTheme(true);
            } else {
                setDarkTheme(false);
            }
        });
    }, []);

    return (
        <>
            <ThemeProvider theme={{...constants, darkThemeOn: darkTheme}}>
                {props?.children}
                <GlobalStyle darkThemeOn={darkTheme} />
            </ThemeProvider>
        </>
    );
};
