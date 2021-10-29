import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
  padding: 0 2rem;

  text-align: center;
`;

export const Header = styled.div``;

export const Title = styled.h1`
  margin: 1rem 0;
  font-size: 2.5rem;

  span {
    color: #86888d;
  }
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

export const ContentSlide = styled.div`
  width: auto;
  height: 638px;

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export const Controls = styled.div`
  width: 100%;
  padding: 0 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;

  opacity: 0;

  transition: 0.5s all;

  button {
    border: none;
    background: transparent;
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
`;

export const Gallery = styled.div`
  height: 638px;

  position: relative;
  z-index: 1;

  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  width: 260px;
  height: 581px;
  margin: 0 3px;

  position: relative;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;

  h1 {
    position: absolute;
    left: 20px;
    bottom: 70px;

    font-size: 2rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    white-space: nowrap;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;

    transition: 1s all;
  }

  p {
    width: 165px;

    position: absolute;
    right: 10px;
    bottom: -100px;

    display: block;
    font-size: 1rem;
    font-weight: 300;
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
`;
