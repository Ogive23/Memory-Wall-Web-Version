import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
    palette: {
        primary: {
            main: '#24ce6b',
        }, secondary: {
            main: '#b58b3f'
        }
    },
});
theme = responsiveFontSizes(theme);

export default theme;