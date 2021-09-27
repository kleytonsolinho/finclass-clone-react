import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  max-width: 1280px;
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
  }
`;

export const Card = styled.div`
    position: relative;
    display: inline-block;
    width: 290px;
    height: 420px;
    margin: 10px 5px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    flex: none;

    img {
      height: 100%;
    }

    &:hover {
      .card-content {
        h1 {
          bottom: 70px;
        }

        p {
          opacity: 1;
          bottom: 20px;
        }
      }
    }

    .card-content {
      width: 100%;
      height: auto;
      padding: 1rem;
      position: absolute;
      left: 0;
      bottom: 0;

      h1 {
        position: absolute;
        left: 0;
        bottom: 40px;
        font-size: 1.3rem;
        padding: 0 1.5rem;
        color: #ffffff;

        transition: 1s all;
      }

      p {
        display: block;
        width: 100%;
        padding: 0 1.5rem;
        font-size: 0.8rem;
        font-weight: 300;
        position: absolute;
        left: 0;
        bottom: 0;
        opacity: 0;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 24px;

        transition: 1s all;
      }
    }
`;
