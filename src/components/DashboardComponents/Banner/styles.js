import styled from 'styled-components';

export const SlideHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  max-width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

export const SlideGallery = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: none;

  padding: 88px 2rem;

  background-image: url(${(props) => (props.bg)});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 40vh;
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(transparent, #000);
`;

export const Controls = styled.div`
  width: 100%;
  height: 20px;
  padding: 2rem 0;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.button`
  margin-left: 0.7rem;
  font-size: 0.8rem;
  color: ${(props) => (props.tooggle)};
  background: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;

  .text {
    position: relative;
    flex: 1;
    max-width: 488px;
  }

  .description {
    width: 50%;
    height: 400px;
    display: flex;
    align-items: flex-end;

    h1 {
      margin: 2rem 0;
      font-size: 3rem;
      line-height: 115%;
      font-weight: bold;
    }

    p {
      font-size: 1rem;
      letter-spacing: -0.005em;
    }

    .btns {
      display: flex;
      align-items: center;
      justify-content: space-between;

      flex: 1;
      max-width: 344px;
      margin-top: 3.5rem;

      .icon {
        margin-right: 5px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 160px;
        height: 48px;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: bold;

        background: #ffffff;
        color: #000;
        border: none;

        transition: all 0.3s;

        &:hover {
          background: #00e7f9;
        }
      }

      button:nth-of-type(2) {
        background: transparent;
        color: #ffffff;
        border: 1px solid #ffffff;

        transition: all 0.3s;

        &:hover {
          color: #00e7f9;
          border: 1px solid #00e7f9;
        }
      }
    }
  }

  .details {
    width: 50%;
    height: 400px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .expert {
      position: relative;
      flex-direction: column;
      display: flex;
      align-items: flex-end;
      max-width: 488px;
      text-align: right;

      .perfilProf {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;

        img {
          height: auto;
          display: block;
          max-width: 100%;
        }
      }

      h1 {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.005em;
      }

      span {
          font-size: 0.875rem;
          font-weight: 300;
          color: #ffffff;
          opacity: 0.8;
          margin-top: 0.5rem;
      }
    }
  }
`;
