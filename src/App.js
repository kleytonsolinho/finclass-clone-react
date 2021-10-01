import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Routes from './routes';

import { NavbarScrollContextProvider } from './context/NavbarScrollContext';

export function App() {
  return (
    <NavbarScrollContextProvider>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </NavbarScrollContextProvider>
  );
}
