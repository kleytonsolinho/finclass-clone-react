import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNavbarScroll } from '../../../hooks/useNavbarScroll';

import logoImg from '../../../assets/images/site/logo-finclass.svg';
import buttonOne from '../../../assets/images/site/trial-icon.svg';
import buttonTwo from '../../../assets/images/site/icon-user.svg';

import {
  NavbarContainer,
  NavbarContent,
  Menu,
} from './styles';

export default function Header() {
  const { isVisible, setisVisible } = useNavbarScroll();

  function handleScroll() {
    if (window.scrollY >= 150) {
      setisVisible(true);
      return;
    }
    setisVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <NavbarContainer isBlack={isVisible}>
      <NavbarContent>
        <img src={logoImg} alt="Logo finclass" />
        <Menu>
          <img src={buttonOne} alt="Assine agora" />
          <Link to="/register">Assine agora</Link>
          <img src={buttonTwo} alt="Fazer login" />
          <Link to="/login">Já sou assinante</Link>
        </Menu>
      </NavbarContent>
    </NavbarContainer>
  );
}
