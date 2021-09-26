import styled from 'styled-components';

import imgBg from '../../assets/images/site/bg-login.56fb13a6.png';

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1280px;
  padding: 0 3rem;
  height: 138px;
  background: rgba(0,0,0,0.95);
  border-color: transparent;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: 1px solid gray;
    color: #ffffff;
    padding: 12px 50px;
    height: 48px;
    border-radius: 6px;
    font-size: 1rem;
  }
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  padding-top: 180px;

  background-image: url(${imgBg});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 464px;
  margin: 0 auto;
  background: #0f1116;
  border: 1px solid #172026;
  border-radius: 8px;
  padding: 2rem 0;

  form, label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form {
    width: 100%;
    font-weight: 300;

    span {
      color: gray;

      strong {
        color: #ffffff;
        font-size: 1.2rem;
      }
    }

    h1 {
      margin: 1rem 0;
    }

    p {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    label {
      width: 100%;
      padding: 0.5rem 0;
    }

    input {
      width: 100%;
      max-width: 368px;
      height: 48px;
      background: rgba(32,34,39,0.9);
      border-radius: 6px;
      padding: 12px 20px;
      letter-spacing: -0.005em;
      color: #ffffff;
      font-size: 1rem;
      border: 1px solid transparent;
      margin: 10px 0;

      &:focus {
        border: 1px solid transparent !important;
      }
    }
  }
`;

export const Policy = styled.div`
  padding: 2rem 0;

  p {
    color: #ffffff;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    font-weight: 300;
    text-align: center;

    max-width: 350px;

    a {
      text-decoration: underline;
    }
  }
`;
