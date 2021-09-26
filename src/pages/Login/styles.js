import styled from 'styled-components';

import imgBg from '../../assets/images/site/bg-login.56fb13a6.png';

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${imgBg});
  background-repeat: repeat-x;

  div {
    width: 100%;
    max-width: 384px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  img {
    margin: 2rem 0;
  }

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 3rem;
  }

  form, label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form {
    width: 100%;
    //background: aquamarine;

    label {
      width: 100%;
      align-items: flex-start;
      padding: 0.5rem 0;
    }

    a {
      align-self: flex-end;
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

    .recpassword {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;

      font-weight: 300;
      font-size: 0.9rem;

      height: 20px;

      img {
        margin-left: 15px;
      }
    }
  }

  h5:before {
    content: "";
    display: block;
    border-top: solid 1px #aaa;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  h5 {
    position: relative;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
  }

  span {
    background: #000;
    padding: 0 20px;
    position: relative;
    z-index: 5;
  }
`;

export const ButtonPrimary = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background: #00e7f9;
  border: none;
  color: #000000;
  font-size: 1rem;
  margin: 2rem 0;

  &:hover {
    background: #00e7f9;
    color: #000000;
  }
`;

export const ButtonOutline = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1.5px solid #00e7f9;
  background: transparent;
  color: #00e7f9;
  font-size: 1rem;
  margin: 2rem 0;

  &:hover {
    background: #00e7f9;
    color: #000000;
  }
`;
