import styled from 'styled-components';

import arrowDownIcon from '../../../assets/images/site/arrow-down.svg';
import arrowTopIcon from '../../../assets/images/site/arrow-top.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: auto;
  padding: 5rem 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    list-style: none;
  }

  .active {
    opacity: 1;
    border-bottom: 1px solid #00e7f9 !important;
  }

  .active-faq {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .open {
    height: auto;

    .answer p {
      opacity: 0.5;
    }
  }
`;

export const Title = styled.h1`
  margin: 1rem 0;

  strong {
    color: #86888d;
  }
`;

export const Navigation = styled.nav`
  width: 750px;
  margin: 3rem 0 4rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Button = styled.button`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  opacity: 0.5;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #202727;
  background: transparent;

  img {
    margin-right: 20px;
  }
`;

export const ContentQuestion = styled.div`
  width: 100%;
  margin: 0 auto;
  display: none;
`;

export const Question = styled.button`
  width: 700px;
  height: 60px;
  padding: 1.2rem 1.5rem;
  margin: 1rem 0;

  cursor: pointer;
  overflow: hidden;
  color: #ffffff;

  background: #202227;
  border: none;
  border-radius: 6px;

  .question {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .answer {
    p {
      margin-top: 2rem;

      font-size: 1.1rem;
      font-weight: 300;
      text-align: left;
      opacity: 0;
    }
  }

  .arrow-down {
    width: 25px;
    height: 25px;

    background-image: url(${arrowDownIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .arrow-up {
    width: 25px;
    height: 25px;

    background-image: url(${arrowTopIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
