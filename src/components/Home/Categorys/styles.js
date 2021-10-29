import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  height: auto;
  padding: 0 2rem;
  margin: 0 auto;

  .mg-top {
    margin-top: 3rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 100%;
  max-width: 520px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 1rem 0 2rem 0;
  font-size: 2rem;

  strong {
    color: #86888d;
  }
`;

export const ListCategorys = styled.ul`
  margin-bottom: 3rem;
  list-style: none;
`;

export const Category = styled.li`
  margin: 2rem 0;

  p {
    margin: 1.5rem 0 2rem 0;
  }
`;

export const Right = styled.div`
  width: 100%;
  max-width: 620px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const BoxesContainer = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: 180px 180px 180px;
  grid-gap: 40px;
  list-style: none;
`;

export const Box = styled.li`
  width: 180px;
  height: 104px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  border-radius: 8px;
  background: #0f1116;

  transition: 0.2s all;

  img {
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
