import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCaretDown } from 'react-icons/fa';

import { useNavbarScroll } from '../../../hooks/useNavbarScroll';

import imgLogo from '../../../assets/images/site/logo-finclass.svg';
import imgAvatar from '../../../assets/images/site/avataaars.svg';

import { NavbarMenu } from './styles';

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
    <NavbarMenu isBlack={isVisible}>
      <div className="navbarContainer">
        <Link to="/dashboard">
          <img src={imgLogo} alt="Logo finclass" />
        </Link>
        <nav>
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
            <div className="user">
              <img src={imgAvatar} alt="" />
              <h1>Kleyton</h1>
              <FaCaretDown className="icon" />
            </div>
          </div>
        </nav>
      </div>
    </NavbarMenu>
  );
}
