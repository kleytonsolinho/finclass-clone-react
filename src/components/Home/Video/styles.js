import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: normal;
  line-height: 2rem;
  text-transform: uppercase;
  color: var(--cc-btn-primary-hover-bg);

  img {
    margin-left: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;

  strong {
    color: #86888d;
  }
`;

export const PlayerVideo = styled.iframe`
  width: 1057px;
  height: 575px;
  margin: 3rem 0;
`;
