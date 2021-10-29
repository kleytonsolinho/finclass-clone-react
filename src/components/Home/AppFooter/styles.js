import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
`;

export const BackgroundBar = styled.div`
  width: 100%;
  height: 600px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(32, 34, 39, 0.5);
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 100%;
  height: 50px;

  background-image: linear-gradient(to top, rgba(32, 34, 39, 0), rgba(0, 0, 0, 1));
`;

export const Bottom = styled.div`
  width: 100%;
  height: 50px;

  background-image: linear-gradient(to bottom, rgba(32, 34, 39, 0), rgba(0, 0, 0, 1));
`;

export const Container = styled.div`
  max-width: 1280px;
  height: auto;
  padding: 0 2rem;
  width: 100%;
  margin: 0 auto;
  position: relative;

  .mg-top {
    margin-top: 3rem;
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
    width: 615px;
    height: 600px;
    object-fit: contain;
  }
`;

export const Right = styled.div`
  max-width: 560px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 10rem;

  img {
    width: 32px;
    height: 32px;
    margin: 0.5rem 0;
  }

  strong {
    color: #86888d;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 2rem 0;

  strong {
    color: #86888d;
  }
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  font-weight: 300;
  opacity: 0.7;
  max-width: 375px;
`;

export const PricePlans = styled.div`
  margin-top: 10px 0;
  display: flex;
  align-items: center;

  strong {
    margin-left: 5px;
    color: var(--cc-btn-primary-hover-bg);
  }
`;
