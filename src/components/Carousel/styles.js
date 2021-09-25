import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: auto;
  text-align: center;

.header {
  h1 {
    margin: 1rem 0;
    font-size: 2.5rem;

    span {
      color: #86888d;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
}

.contentSlide {
  width: auto;
  height: 638px;

  &:hover {
    .controls {
      opacity: 1;
    }
  }
}

.slideGalery {
  height: 638px;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  scroll-behavior: smooth;
}

.slideGalery::-webkit-scrollbar {
  display: none;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background: transparent;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  padding: 0 6rem;
  opacity: 0;

  transition: 0.5s all;

  button {
    background: transparent;
    border: none;
  }
}

.arrowLeft {
  transform: rotate(90deg);

  &:hover {
    cursor: pointer;
  }
}

.arrowRight {
  transform: rotate(-90deg);

  &:hover {
    cursor: pointer;
  }
}

.card {
  width: 260px;
  height: 581px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0 3px;
  overflow: hidden;

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

`;
