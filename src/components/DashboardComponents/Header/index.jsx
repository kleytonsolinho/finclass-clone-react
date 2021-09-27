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
        <img src={imgLogo} alt="Logo finclass" />
        <nav>
          <ul>
            <Link to="/"><li>Início</li></Link>
            <Link to="/"><li>Finclasses</li></Link>
            <Link to="/"><li>Finseries</li></Link>
            <Link to="/"><li>Finbooks</li></Link>
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
