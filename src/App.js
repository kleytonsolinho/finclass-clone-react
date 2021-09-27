import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Routes from './routes';

import NavbarScrollProvider from './context/NavbarScroll';

export function App() {
  return (
    <NavbarScrollProvider>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </NavbarScrollProvider>
  );
}
