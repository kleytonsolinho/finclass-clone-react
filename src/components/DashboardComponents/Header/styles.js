import styled from 'styled-components';

export const NavbarMenu = styled.header`
  width: 100vw;
  height: 88px;
  padding: 0 2rem;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  z-index: 10;
  background: ${(props) => (props.isBlack ? 'black' : 'linear-gradient(to bottom, #000000, transparent)')};

  .navbarContainer {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;

    nav {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 6rem;
      height: 100%;
      display: flex;
      align-items: center;

      ul {
        display: flex;
        align-items: center;
        list-style: none;
        height: 100%;
      }

      li:first-of-type {
        margin-left: 0;
      }

      li {
        display: flex;
        align-items: center;

        position: relative;
        font-size: 1.1rem;
        font-weight: bold;
        line-height: 115%;
        height: 100%;
        margin-left: 3rem;
        color: #ffffff;
        opacity: 0.8;

        transition: opacity 0.3s;

        &:hover {
          opacity: 1;
          border-bottom: 3px solid #00e7f9;
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      margin-left: 2rem;

      button {
        border: none;
        background: #ffffff;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .user {

        &:hover {
          color: #00e7f9;
          cursor: pointer;
        }

        img {
          width: 32px;
          height: 32px;
        }

        h1 {
          margin: 0 0.5rem;
          font-size: 1.2rem;
        }

        .icon {
          color: #00e7f9;
        }
      }
    }
  }
`;
