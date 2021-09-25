import logoImg from '../../assets/images/site/logo-finclass.svg';
import buttonOne from '../../assets/images/site/trial-icon.svg';
import buttonTwo from '../../assets/images/site/icon-user.svg';

import { NavbarMenu } from './styles';

export default function Navbar() {
  return (
    <NavbarMenu>
      <div className="navbarContainer">
        <img src={logoImg} alt="Logo finclass" />
        <nav>
          <img src={buttonOne} alt="Assine agora" />
          <a href="/register">Assine agora</a>
          <img src={buttonTwo} alt="Fazer login" />
          <a href="/login">Já sou assinante</a>
        </nav>
      </div>
    </NavbarMenu>
  );
}
