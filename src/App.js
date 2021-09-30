import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Routes from './routes';

import { NavbarScrollContext } from './context/NavbarScroll';

export function App() {
  return (
    <NavbarScrollContext>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </NavbarScrollContext>
  );
}
