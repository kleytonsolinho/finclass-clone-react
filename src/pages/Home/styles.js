import styled from 'styled-components';

import imgBg from '../../assets/images/site/bg-desktop.webp';

export const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 100px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 628px;
  background-image: url(${imgBg});
  background-repeat: no-repeat;

.content {
  width: 50%;
  margin-top: 100px;

  div strong:first-of-type {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 2rem;
    color: var(--cc-btn-primary-hover-bg);
    margin-right: 10px;
    font-weight: normal;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 25px 0;
  }

  span {
    color: #86888d;
    font-weight: bold;

    strong {
      color: #ffffff;
    }
  }

  div:nth-of-type(2) {
    margin-top: 3rem;

    display: flex;
    align-items: center;

    line-height: 32px;
    height: 32px;

    p {
      margin-right: 1rem;
    }
  }
}

.img {
  width: 50%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

`;
