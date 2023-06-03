import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Do Hyeon", "sans-serif"',
  },
  palette: {
    primary: {
      main: '#88c98e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ed5c7e',
      const: '#fff',
    },
    grey: {
      main: '#A9A9A9',
      contrastText: '#fff',
    },
    black: {
      main: '#000',
      contrastText: '#fff',
    },
  },
  // palette: {
  //     primary: {
  //         main: '#d73c60',
  //         contrastText: '#fff'
  //     },
  //     gray: {
  //         main: '#A9A9A9',
  //         contrastText: '#fff'
  //     },
  //     black: {
  //         main: '#000',
  //         contrastText: '#fff'
  //     }
  // }
});

export default theme;
