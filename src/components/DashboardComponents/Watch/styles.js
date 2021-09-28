import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  height: auto;
  padding: 2rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 36px;
  margin: 6rem 0 2rem 0;

  display: flex;
  align-items: center;

  img {
    transform: rotate(90deg);
  }

  h1 {
    margin-left: 2rem;
  }
`;

export const ContentPlayer = styled.div`
  width: 100%;
  height: 637px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentInfo = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Player = styled.div`
  width: 100%;
  height: 100%;
  max-width: 830px;

  border-radius: 10px;
`;

export const VideoList = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;

  padding-left: 1rem;

  h1 {
    margin-bottom: 3rem;
  }

  ul {
    list-style: none;
  }

  ul li {
    width: 100%;
    height: 128px;
    padding: 1.5rem 0;
    background-image: linear-gradient(90deg, #202227 -2.03%, rgba(32, 34, 39, 0) 101.79%);

    &:hover {
      border-left: 1px solid #00e7f9;
    }
  }
`;

export const Resume = styled.div`
  width: 100%;
  height: 100%;
  max-width: 830px;

  h1, div span {
    color: #86888d;
  }

  div {
    padding: 2rem 0;
    font-size: 1.1rem;

    span {
      margin-left: 1rem;
      margin-right: 0.3rem;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  padding-left: 2rem;
`;

export const Teacher = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  .foto {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 80px;
    }
  }

  .name{
    margin-left: 1rem;

    h1 {
      font-size: 1rem;
      font-weight: bold;
    }

    span {
      font-weight: normal;
      color: #86888d;
    }
  }
`;

export const About = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    color: #86888d;
    margin: 1rem 0;
  }

  p {
    color: #ffffff;
    opacity: 0.8;
  }
`;
