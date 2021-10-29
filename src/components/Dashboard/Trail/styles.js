import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Title = styled.h3`
  margin: 3rem 0 2rem 0;
  padding: 2rem 0;

  font-size: 1.3rem;
  color: gray;
  border-top: 2px solid #202227;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 41px;

  margin-top: 2rem;
`;

export const BoxContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 152px;
  padding: 2rem 1.5rem;

  position: relative;

  background: rgba(32, 34, 39, 0.5);
  border-radius: 6px;
  overflow: hidden;

  transition: 0.2s all;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);

    .btn {
      opacity: 1;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 1rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const HeaderWatch = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;

  span {
    margin-right: 1rem;
    font-size: 0.9rem;

    transition: 0.5s all;
  }
`;

export const Description = styled.p`
  font-size: 0.8rem;
  line-height: 145%;
  color: #ffffff;
  opacity: 0.8;
`;
