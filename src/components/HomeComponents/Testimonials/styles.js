import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  height: auto;
  padding: 0 2rem;
  width: 100%;
  margin: 0 auto;

  .mg-top {
    margin-top: 3rem;
  }

  h1 {
    font-size: 2rem;
    margin: 1rem 0 2rem 0;

    strong {
      color: #86888d;
    }
  }

  .active {
    display: block;
  }

  .card-active {
    opacity: 1 !important;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 408px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;

  .user {
    width: auto;
    height: 112px;
    margin-bottom: 1.5rem;
    background: #0F1116;
    border-radius: 8px;
    opacity: 0.5;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 72px;
      height: 72px;
      margin: 1.2rem 2rem;
      border-radius: 50%;
    }

    p {
      font-weight: bold;
      font-size: 1rem;
      line-height: 23px;
      color: var(--cc-btn-primary-hover-bg);
    }

    span {
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 20px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    background: transparent;
    border: none;
  }

  img {
    width: 48px;
    height: 48px;
    margin: 0.5rem 0;
  }

  .up {
    transform: rotate(180deg);
  }
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;
  max-width: 620px;
  background: #0F1116;
  border-radius: 16px;
  padding: 2.5rem 3rem;

  div {
    display: none;
  }

  .testimonials {

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0.5rem 0 3rem 0;
    }

    ul li img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }

    p {
      margin: 1rem 0;
      font-weight: 300;
    }
  }
`;
