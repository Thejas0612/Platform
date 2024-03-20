import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#00573D',
        },
        secondary: {
            main: '#004B8D',
        },
    },
}

export const theme = createTheme(themeOptions);