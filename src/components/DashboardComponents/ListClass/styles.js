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

  h1 {
    color: #86888d;
    margin-bottom: 2rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 200px;
  margin: 3rem 0;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .video {
    display: block;
    position: relative;

    .progress {
      width: 100%;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #86888d;
      margin: auto;
      border-radius: 2px;
    }

    img {
      height: 100%;
    }

    span {
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: #86888d;
      padding: 6px;
      margin-bottom: 10px;
      border-radius: 2px 0;
      font-size: 0.8rem;
      font-weight: bold;
      color: #ffffff;
    }
  }

  .info {
    padding: 2rem;

    span {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: bold;
      padding: 6px;
      background-color: #202227;
      border-radius: 4px;
      color: #86888d;
    }

    h3 {
      margin: 0.8rem 0 0.5rem 0;
      font-size: 1.3rem;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      color: #86888d;
      font-size: 1rem;
    }
  }
`;

export const Help = styled.div`
  width: 100%;
  max-width: 400px;

  h1 {
    color: #86888d;
    margin-bottom: 2rem;
  }

  .materials {
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
  }

  .question {
    padding: 3rem 2.5rem;
    background: #0f1116;
    margin: 2rem 0;
    border-radius: 6px;

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
      background: #202227;
    }

    textarea {
      width: 100%;
      background: transparent;
      border-radius: 6px;
      caret-color: #00e7f9;
      color: #ffffff;
      flex: 1;
      padding: 10px;
    }
  }
`;
