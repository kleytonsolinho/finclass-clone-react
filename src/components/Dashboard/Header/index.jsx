import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCaretDown } from 'react-icons/fa';

import { useNavbarScroll } from '../../../hooks/useNavbarScroll';

import imgLogo from '../../../assets/images/site/logo-finclass.svg';
import imgAvatar from '../../../assets/images/site/avatar.jpeg';

import {
  Container,
  Content,
  Navbar,
  UserProfile,
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
    <Container isBlack={isVisible}>
      <Content>
        <Link to="/dashboard">
          <img src={imgLogo} alt="Logo finclass" />
        </Link>
        <Navbar>
          <ul>
            <li><Link to="/dashboard">Início</Link></li>
            <li><Link to="/dashboard">Finclasses</Link></li>
            <li><Link to="/dashboard">Finseries</Link></li>
            <li><Link to="/dashboard">Finbooks</Link></li>
          </ul>
          <div>
            <button type="button">
              <FaSearch />
            </button>
            <UserProfile>
              <img src={imgAvatar} alt="" />
              <h1>Kleyton Solinho</h1>
              <FaCaretDown className="icon" />
            </UserProfile>
          </div>
        </Navbar>
      </Content>
    </Container>
  );
}
