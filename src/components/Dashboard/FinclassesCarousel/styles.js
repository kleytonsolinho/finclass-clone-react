import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  max-width: 1280px;
  height: 500px;
  margin: 2rem auto;
  padding: 3rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SlideHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 2rem 0;

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
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 450px;
  position: relative;

  &:hover {
    button {
      opacity: 1;
    }
  }
`;

export const SlideGallery = styled.div`
  height: 100%;

  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;

  position: relative;
  z-index: 1;
  scroll-behavior: smooth;

  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    width: 70px;
    height: 450px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0;
    z-index: 2;

    background: transparent;
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

export const Card = styled.a`
    width: 290px;
    height: 420px;
    margin: 10px 12px;

    position: relative;
    display: inline-block;

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
`;

export const CardContent = styled.div`
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
    width: 100%;
    padding: 0 1.5rem;

    display: block;
    position: absolute;
    left: 0;
    top: 50px;

    font-size: 1.5rem;
    white-space: pre-line;
    color: #ffffff;
  }

  span {
    position: absolute;
    left: 0;
    top: 80px;
    padding: 0 1.5rem;

    font-size: 0.9rem;
    font-weight: 300;
    opacity: 0.8;
    color: #ffffff;
  }

  p {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    display: block;

    position: absolute;
    left: 0;
    top: 120px;

    font-size: 0.8rem;
    font-weight: 300;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
    line-height: 1rem;
  }
`;
