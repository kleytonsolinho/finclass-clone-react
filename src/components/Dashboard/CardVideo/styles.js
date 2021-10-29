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
  max-width: 50%;
  display: block;
  position: relative;

  img {
    width: 100%;
  }

  span {
    padding: 6px;
    margin-bottom: 10px;

    position: absolute;
    right: 0;
    bottom: 0;

    border-radius: 2px 0;
    font-size: 0.8rem;
    font-weight: bold;
    color: #ffffff;
    background-color: #86888d;
  }
`;

export const Info = styled.div`
  padding: 2rem;
  max-width: 50%;

  span {
    padding: 6px;
    display: inline-block;

    font-size: 0.7rem;
    font-weight: bold;
    border-radius: 4px;

    background-color: #202227;
    color: #86888d;
  }

  h3 {
    margin: 0.8rem 0 0.5rem 0;
    font-size: 1rem;
  }

  p {
    overflow: hidden;
    font-size: 1rem;
    text-overflow: ellipsis;
    color: #86888d;
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
