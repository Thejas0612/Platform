import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#00805a',
        },
        secondary: {
            main: '#000',
        },
    },

    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },

    shape: {
        borderRadius: 0,
    },
    
}

export const theme = createTheme(themeOptions);