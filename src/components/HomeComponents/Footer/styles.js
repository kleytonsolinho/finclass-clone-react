import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 450px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 5rem;

  .nav-menu-footer {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0 2rem 0;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    section {
      .separator {
        margin: 5rem 0 1rem 0;
      }

      p {
        font-weight: 300;
      }


      ul {
        list-style: none;
      }

      li {
        margin: 1rem 0;
      }

      .app-store {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;

        a {
          display: block;
          padding: 10px 20px;
          border: 1px solid #ffffff;
          border-radius: 6px;
          width: 170px;
          margin: 1rem 0;

          transition: 1s all;

          &:hover {
            background: var(--cc-btn-primary-hover-bg);
          }
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 50px;
  margin: 0 auto;

  border-top: 2px solid #202227;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem;
  margin-top: 5rem;

  p {
    font-size: 0.9rem;
  }

  .toTheTop {
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
  }
`;
