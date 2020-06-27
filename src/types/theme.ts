type DarkLight = {dark: string; light: string}

export type ThemeProps = {
    theme: {
        colors: {
            [Symbol.iterator]: string;
        };
        theme: {
            font: DarkLight;
            bg: DarkLight;
        };
        darkThemeOn: boolean;
    };
}
