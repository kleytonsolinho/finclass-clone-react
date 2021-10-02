import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1280px;
  padding: 0 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 2rem;
    color: var(--cc-btn-primary-hover-bg);
    font-weight: normal;

    img {
      margin-left: 5px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 2.5rem;

    strong {
      color: #86888d;
    }
  }

  iframe {
    margin: 3rem 0;
    width: 1057px;
    height: 575px;
  }
`;
