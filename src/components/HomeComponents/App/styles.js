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
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  max-width: 650px;
  img {
    width: 650px;
    height: 487px;
    margin-top: 80px;
    object-fit: contain;
  }
`;

export const Right = styled.div`
  max-width: 560px;
  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 32px;
        height: 32px;
        margin: 1rem 1rem 1rem 0;
      }

      strong {
        font-size: 1.2rem;
        opacity: 0.8;
      }

      p {
        margin: 0.5rem 0;
        font-weight: 300;
        opacity: 0.7;
      }
    }
  }

  ul li:nth-child(even) {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 487px;
      height: 2px;
      margin: 12px 0;
    }
  }

  .app-store {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;

    a {
      display: block;
      padding: 10px 20px;
      border: 1px solid #ffffff;
      border-radius: 6px;
      width: 170px;

      transition: 1s all;

      &:hover {
        background: var(--cc-btn-primary-hover-bg);
      }
    }
  }
`;
