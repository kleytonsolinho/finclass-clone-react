import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  height: auto;
  padding: 2rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 36px;
  margin: 6rem 0 2rem 0;

  display: flex;
  align-items: center;

  img {
    transform: rotate(90deg);
  }
`;

export const Title = styled.h1`
  margin-left: 2rem;
`;

export const ContentPlayer = styled.div`
  width: 100%;
  height: 637px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContentInfo = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Player = styled.div`
  width: 100%;
  height: 100%;
  max-width: 830px;

  border-radius: 10px;
`;

export const VideoList = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 560px;

  margin-bottom: 3rem;
  padding-left: 1rem;

  .item {
    width: 100%;
    height: 128px;
    padding: 1.5rem 0;
    margin: 1rem 0;

    position: relative;
    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
      border-left: 2px solid #00e7f9;
      background-image: linear-gradient(90deg, #202227 -2.03%, rgba(32, 34, 39, 0) 101.79%);
    }
  }
`;

export const VideoListHeader = styled.div`
  width: 100%;
  height: 23px;
  margin-bottom: 3rem;
`;

export const VideoListContainer = styled.div`
  max-height: 500px;
  margin-bottom: 2rem;

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #86888d;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Resume = styled.div`
  width: 100%;
  max-width: 830px;
  height: 100%;

  h1, div span {
    color: #86888d;
  }

  div {
    padding: 2rem 0;
    font-size: 1.1rem;

    span {
      margin-left: 1rem;
      margin-right: 0.3rem;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  padding-left: 2rem;
`;

export const Teacher = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TeacherImage = styled.div`
  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 80px;
  }
`;

export const TeacherInfo = styled.div`
  margin-left: 1rem;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  span {
    font-weight: normal;
    color: #86888d;
  }
`;

export const About = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    color: #86888d;
    margin: 1rem 0;
  }

  p {
    color: #ffffff;
    opacity: 0.8;
  }
`;
