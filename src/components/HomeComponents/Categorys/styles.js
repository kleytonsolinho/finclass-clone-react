import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1280px;
  height: auto;
  padding: 0 2rem;
  width: 100%;
  margin: 4rem 0;
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

  h1 {
    font-size: 2rem;
    margin: 1rem 0 2rem 0;

    strong {
      color: #86888d;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 3rem;

    li {
      margin: 2rem 0;
    }

    p {
      margin: 1.5rem 0 2rem 0;
    }
  }
`;

export const Right = styled.div`
  width: 100%;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: 180px 180px 180px;
    grid-gap: 40px;
    list-style: none;

    li {
      width: 180px;
      height: 104px;
      border-radius: 8px;
      background: #0f1116;
      padding: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      img {
        margin-bottom: 10px;
      }
    }
  }
`;
