import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCaretDown } from 'react-icons/fa';

import { useNavbarScoll } from '../../../context/NavbarScroll';

import imgLogo from '../../../assets/images/site/logo-finclass.svg';
import imgAvatar from '../../../assets/images/site/avataaars.svg';

import { NavbarMenu } from './styles';

export default function Header() {
  const { isVisible, setisVisible } = useNavbarScoll();

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
            <Link to="/dashboard"><li>Início</li></Link>
            <Link to="/dashboard"><li>Finclasses</li></Link>
            <Link to="/dashboard"><li>Finseries</li></Link>
            <Link to="/dashboard"><li>Finbooks</li></Link>
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
