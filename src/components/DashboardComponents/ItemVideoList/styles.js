import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  display: block;
  position: relative;
  max-width: 50%;

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
    width: 100%;
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
`;

export const Info = styled.div`
  padding: 2rem;
  max-width: 50%;

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
`;
