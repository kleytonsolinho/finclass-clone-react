import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  height: auto;
  padding: 0 2rem;
  width: 100%;
  margin: 0 auto;
  position: relative;

  .bg-gray {
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(32, 34, 39, 0.5);
  }

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
  justify-content: flex-start;
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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  img {
    width: 32px;
    height: 32px;
    margin: 0.5rem 0;
  }

  strong {
    color: #86888d;
  }

  p {
    margin-bottom: 1rem;
    font-weight: 300;
    opacity: 0.7;
    max-width: 375px;
  }

  div {
    margin-top: 10px 0;
    display: flex;
    align-items: center;
  }

  div strong {
    margin-left: 5px;
    color: var(--cc-btn-primary-hover-bg);
  }
`;
