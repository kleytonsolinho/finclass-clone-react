import { createContext, useState, useContext } from 'react';

const NavbarScroll = createContext();

export function NavbarScrollContext({ children }) {
  const [isVisible, setisVisible] = useState(false);

  return (
    <NavbarScroll.Provider value={{ isVisible, setisVisible }}>
      {children}
    </NavbarScroll.Provider>
  );
}

export function useNavbarScoll() {
  const context = useContext(NavbarScroll);
  const { isVisible, setisVisible } = context;
  return { isVisible, setisVisible };
}
