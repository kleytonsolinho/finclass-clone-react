import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 88px;
  padding: 0 2rem;

  position: fixed;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);

  background: ${(props) => (props.isBlack ? 'black' : 'linear-gradient(to bottom, #000000, transparent)')};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Navbar = styled.nav`
  height: 100%;
  margin-left: 6rem;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    height: 100%;

    display: flex;
    align-items: center;
    list-style: none;
  }

  li:first-of-type {
    margin-left: 0;
  }

  li {
    height: 100%;
    margin-left: 3rem;

    display: flex;
    align-items: center;

    position: relative;

    font-size: 1.1rem;
    font-weight: bold;
    line-height: 115%;
    color: #ffffff;
    opacity: 0.8;

    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
      border-bottom: 3px solid #00e7f9;
    }
  }


  div {
    display: flex;
    align-items: center;
    margin-left: 2rem;

    button {
      width: 32px;
      height: 32px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 50%;
      background: #ffffff;
    }
  }
`;

export const UserProfile = styled.div`
  &:hover {
    color: #00e7f9;
    cursor: pointer;
  }

  img {
    width: 32px;
    height: 32px;

    border-radius: 50%;
  }

  h1 {
    margin: 0 0.5rem;
    font-size: 1.2rem;
  }

  .icon {
    color: #00e7f9;
  }
`;
