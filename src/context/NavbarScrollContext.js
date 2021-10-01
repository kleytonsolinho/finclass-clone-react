import { createContext, useState } from 'react';

export const NavbarScrollContext = createContext();

export function NavbarScrollContextProvider({ children }) {
  const [isVisible, setisVisible] = useState(false);

  return (
    <NavbarScrollContext.Provider value={{ isVisible, setisVisible }}>
      {children}
    </NavbarScrollContext.Provider>
  );
}
