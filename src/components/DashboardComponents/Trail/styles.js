import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  margin: 0 auto;

  h3 {
    font-size: 1.3rem;
    color: gray;
    margin: 3rem 0 2rem 0;
    border-top: 2px solid #202227;
    padding: 2rem 0;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 41px;
  margin-top: 2rem;

  .box {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 152px;
    background: rgba(32, 34, 39, 0.5);
    border-radius: 6px;
    padding: 2rem 1.5rem;
    overflow: hidden;

    transition: 0.2s all;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);

      header .btn {
        opacity: 1;
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    .tittle, .btn {
      display: flex;
      align-items: center;
    }

    .btn {
      opacity: 0;
    }

    p {
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: bold;
      margin-left: 1rem;
    }

    span {
      font-size: 0.9rem;
      margin-right: 1rem;

      transition: 0.5s all;
    }
  }

  p {
    font-size: 0.8rem;
    color: #ffffff;
    opacity: 0.8;
    line-height: 145%;


  }
`;
