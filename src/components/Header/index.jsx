import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/site/logo-finclass.svg';
import buttonOne from '../../assets/images/site/trial-icon.svg';
import buttonTwo from '../../assets/images/site/icon-user.svg';

import { NavbarMenu } from './styles';

export default function Header({ isBlack }) {
  return (
    <NavbarMenu isBlack={isBlack}>
      <div className="navbarContainer">
        <img src={logoImg} alt="Logo finclass" />
        <nav>
          <img src={buttonOne} alt="Assine agora" />
          <Link to="/register">Assine agora</Link>
          <img src={buttonTwo} alt="Fazer login" />
          <Link to="/login">Já sou assinante</Link>
        </nav>
      </div>
    </NavbarMenu>
  );
}
