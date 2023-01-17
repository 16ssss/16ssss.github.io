import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Do Hyeon", "sans-serif"'
    },
    palette: {
        primary: {
            main: '#d73c60',
            contrastText: '#fff'
        },
        gray: {
            main: '#A9A9A9',
            contrastText: '#fff'
        },
    }
});

export default theme;