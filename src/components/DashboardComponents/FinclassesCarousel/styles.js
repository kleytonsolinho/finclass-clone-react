import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  max-width: 1280px;
  height: 500px;
  margin: 2rem auto;
  padding: 3rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header {
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.2rem;
    font-weight: bold;

    div {
      display: flex;
      align-items: center;
    }

    .arrowR {
      margin-left: 5px;
      width: 10px;
      height: 31px;
    }
  }

  .contentSlide {
    width: 100%;
    height: 450px;
    position: relative;

    &:hover {
      button {
        opacity: 1;
      }
    }
  }

  .slideGalery {
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    position: relative;
    z-index: 1;
    scroll-behavior: smooth;

    display: flex;
    align-items: center;
  }

  .slideGalery::-webkit-scrollbar {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0;

    width: 70px;
    height: 450px;
    background: transparent;
    z-index: 2;
    opacity: 0;
    border: none;

    transition: 0.5s all;
  }

  button:first-of-type {
    background-image: linear-gradient(to right, #0b0b0e, transparent);
    left: 0;

    img {
      transform: rotate(180deg);

      &:hover {
        cursor: pointer;
      }
    }
  }

  button:last-of-type {
    background-image: linear-gradient(to left, #0b0b0e, transparent);
    right: 0;

    img {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Card = styled.div`
    position: relative;
    display: inline-block;
    width: 290px;
    height: 420px;
    margin: 10px 12px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    flex: none;

    img {
      height: 100%;
    }

    &:hover {
      .card-content {
        bottom: 0px;
      }
    }

    .card-content {
      width: 100%;
      height: 200px;
      padding: 1rem;
      position: absolute;
      left: 0;
      bottom: -80px;

      transition: 0.2s all;

      h2 {
        position: absolute;
        left: 0;
        top: 20px;
        font-size: 1rem;
        padding: 0 1.5rem;
        color: #00e7f9;
      }

      h1 {
        display: block;
        width: 100%;
        white-space: pre-line;
        position: absolute;
        left: 0;
        top: 50px;
        font-size: 1.5rem;
        padding: 0 1.5rem;
        color: #ffffff;
      }

      span {
        position: absolute;
        left: 0;
        top: 80px;
        font-size: 0.9rem;
        font-weight: 300;
        padding: 0 1.5rem;
        opacity: 0.8;
        color: #ffffff;
      }

      p {
        display: block;
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        font-size: 0.8rem;
        font-weight: 300;
        position: absolute;
        left: 0;
        top: 120px;
        text-align: left;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1rem;
      }
    }
`;
