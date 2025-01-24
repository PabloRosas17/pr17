import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter  as Router } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import theme from './assets/theme/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/pr17/pr17-app/">
        <RoutesConfig />
      </Router>
    </ThemeProvider>
  );
}

export default App;