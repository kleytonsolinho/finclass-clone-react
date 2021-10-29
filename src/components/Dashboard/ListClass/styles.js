import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  height: auto;
  padding: 2rem;
  margin: 0 auto;

  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Aulas = styled.div`
  width: 100%;
  max-width: 730px;
  height: auto;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #86888d;
`;

export const Card = styled.a`
  width: 100%;
  height: 200px;
  margin: 3rem 0;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Video = styled.div`
  display: block;
  position: relative;

  img {
    height: 100%;
  }

  span {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 6px;
    margin-bottom: 10px;

    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 2px 0;
    color: #ffffff;
    background-color: #86888d;
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 5px;
  margin: auto;

  position: absolute;
  left: 0;
  bottom: 0;

  background-color: #86888d;
  border-radius: 2px;
`;

export const Info = styled.div`
  padding: 2rem;

  span {
    display: inline-block;
    padding: 6px;

    font-size: 0.8rem;
    font-weight: bold;

    border-radius: 4px;
    color: #86888d;
    background-color: #202227;
  }

  h3 {
    margin: 0.8rem 0 0.5rem 0;
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #86888d;
  }
`;

export const Help = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Materials = styled.div`
  ul {
    list-style: none;
  }

  ul li {
    padding: 2rem 0;
    border-top: 1px solid #202227;
    border-bottom: 1px solid #202227;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div span {
      margin-left: 20px;
      font-weight: bold;
      opacity: 0.9;
    }
  }
`;

export const Question = styled.div`
  padding: 3rem 2.5rem;
  margin: 2rem 0;
  border-radius: 6px;
  background: #0f1116;

  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3{
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    margin: 1rem 0;
  }

  span {
    font-size: 0.9rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  form {
    width: 100%;
    margin-top: 10px;
  }

  textarea {
    width: 100%;
    padding: 10px;

    flex: 1;
    border-radius: 6px;
    color: #ffffff;
    caret-color: #00e7f9;
    background: #202227;
  }
`;
