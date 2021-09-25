import styled from 'styled-components';

export const NavbarMenu = styled.header`
  max-width: 1280px;
  height: 100px;
  padding: 0 2rem;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  z-index: 10;
  background: #000000;

.navbarContainer {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
  }

  a {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
    align-items: center;
    margin-left: 10px;
  }

  a:nth-of-type(1) {
    margin-right: 50px;
  }
}

`;
