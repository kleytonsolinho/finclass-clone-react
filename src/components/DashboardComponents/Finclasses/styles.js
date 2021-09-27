import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 500px;
  padding: 0 2rem;

  margin-top: 8rem;

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

    .arrowR {
      margin-left: 5px;
      width: 10px;
      height: 10px;
    }
  }

  .contentSlide {
    width: 100%;
    height: 450px;
    background: aqua;

    &:hover {
      .controls {
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

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 10;
    opacity: 0;

    transition: 0.5s all;

    button {
      background: transparent;
      width: 70px;
      height: 100%;
      border: none;
    }

    button:first-of-type {
      background-image: linear-gradient(to right, #0b0b0e, transparent);
    }

    button:last-of-type {
      background-image: linear-gradient(to left, #0b0b0e, transparent);
    }

    .arrowLeft {
      transform: rotate(180deg);

      &:hover {
        cursor: pointer;
      }
    }

    .arrowRight {
      &:hover {
        cursor: pointer;
      }
    }

    .card {
      width: 290px;
      height: 420px;
      display: inline-block;
      position: relative;
      cursor: pointer;
      margin: 10px 5px;
      border-radius: 6px;
      overflow: hidden;

      background: aquamarine;

      img {
        height: 100%;
      }

      .card-content {
        width: 100%;
        padding: 1rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background: red;
      }

      h1 {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        white-space: nowrap;
        position: absolute;
        left: 20px;
        bottom: 70px;
        font-size: 2rem;
        color: transparent;
        -webkit-text-stroke: 1px #ffffff;

        transition: 1s all;
      }

      p {
        display: block;
        width: 165px;
        font-size: 1rem;
        font-weight: 300;
        position: absolute;
        right: 10px;
        bottom: -100px;
        text-align: left;
        opacity: 0;
        white-space: pre-wrap;
        line-height: 24px;

        transition: 1s all;
      }

      &:hover {
        h1 {
          color: #ffffff;
        }

        p {
          opacity: 1;
          bottom: 50px;
        }
      }
    }
  }
`;
