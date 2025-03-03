import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D7A97E',
      light: '#E8CBAF',
      dark: '#C9884C',
    },
    secondary: {
      main: '#7EACD7',
      light: '#9DC3E4',
      dark: '#6A9BCF',
    },
    error: {
      main: '#B00020',
      light: '#BF152C',
      dark: '#CC1E33',
    },
    warning: {
      main: '#FCEC55',
      light: '#FCEF74',
      dark: '#FAE635',
    },
    background: {
      paper: '#f0f0f0',
      default: '#F5EADF',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: '#f0f0f0',
          fontFamily: "'Roboto', sans-serif",
        },
        '.App': {
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '::-webkit-scrollbar': {
          width: '10px',
          height: '10px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#F5EADF',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#D7A97E',
          borderRadius: '10px',
          border: '2px solid #F5EADF',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#C9884C',
        },
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#D7A97E #F5EADF',
        },
      },
    },
  },
});

export default theme;
