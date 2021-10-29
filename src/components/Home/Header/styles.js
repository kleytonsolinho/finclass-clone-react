import styled from 'styled-components';

export const NavbarContainer = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 2rem;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  z-index: 10;
  background: ${(props) => (props.isBlack ? 'black' : 'transparent')};
`;

export const NavbarContent = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: 10px;

    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
    align-items: center;
  }

  a:nth-of-type(1) {
    margin-right: 50px;
  }
`;
