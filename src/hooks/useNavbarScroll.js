import { useContext } from 'react';
import { NavbarScrollContext } from '../context/NavbarScrollContext';

export function useNavbarScroll() {
  const navbarScroll = useContext(NavbarScrollContext);

  return navbarScroll;
}
