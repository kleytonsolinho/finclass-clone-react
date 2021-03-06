import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 450px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 5rem;

  background: rgba(32, 34, 39, 0.5);
`;

export const NavbarFooter = styled.nav`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0 2rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  div {
    ul {
      list-style: none;
      font-weight: bold;
    }

    li {
      margin: 1rem 0;
    }

    a {
      color: gray;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 50px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-top: 5rem;

  border-top: 2px solid #202227;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.9rem;
  }
`;

export const ToTop = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
    font-weight: bold;
  }

  button {
    border: none;
    background: transparent;

    img {
      transform: rotate(180deg);
    }
  }
`;
