import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  height: auto;
  padding: 5rem 2rem;
  width: 100%;
  margin: 0 auto;

  .active-btn {
    border: 1px solid #00e7f9 !important;
  }

  .active-b {
    border-right: 1px solid #00e7f922;
    border-top: 1px solid #00e7f9;
    border-left: 1px solid #00e7f9;
    border-bottom: 1px solid #00e7f9;
  }

  .active-a {
    border-left: 1px solid #00e7f922;
    border-top: 1px solid #00e7f9;
    border-right: 1px solid #00e7f9;
    border-bottom: 1px solid #00e7f9;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  span {
    color: #86888d;
  }

  h1 {
    margin: 1rem 0;
  }

  p {
    opacity: 0.7;
    font-weight: 300;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;

  hr {
    border-top: 1px solid #00e7f9;
    width: 43px;
    transform: rotate(90deg);
    margin-top: 1rem;
  }
`;

export const SelectTrail = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;

  .btns {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    top: 40px;
    z-index: 2;

    button {
      display: flex;
      align-items: center;
      justify-content: space-around;

      border: 1px solid #0f1116;
      width: 290px;
      border-radius: 14.5px;
      background: #0f1116;
      padding: 2rem;
      font-size: 1.5rem;
      line-height: 27px;
      color: #ffffff;
      cursor: pointer;
    }
  }

  .begginer {
    width: 500px;
    height: 250px;
    position: relative;
    background: transparent;
  }

  .advanced {
    width: 500px;
    height: 250px;
    position: relative;
    background: transparent;
  }
`;

export const TrailContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;

    .left {
      width: 100%;
      height: 180px;
      position: relative;

      display: flex;
      align-items: center;
      padding: 5rem 0 3rem 0;

      border-right: 1px solid #00e7f9;

      .icon {
        margin-right: 2rem;
      }

      .description {
        h1 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
          font-weight: 300;
          margin-top: 1rem;
        }
      }

      img:nth-of-type(2) {
        width: 252px;
        height: unset;
      }

      img:nth-of-type(3) {
        width: 40px;
        height: 40px;
        position: absolute;
        right: -20px;
      }
    }

    .right {
      width: 100%;
      height: 180px;
      position: relative;

      display: flex;
      align-items: center;
      padding: 5rem 0 3rem 0;

      img:nth-of-type(2) {
        width: 252px;
        height: unset;
      }

      img:nth-of-type(1) {
        width: 40px;
        height: 40px;
        position: absolute;
        left: -20px;
      }

      .icon {
        margin-right: 2rem;
      }

      .description {
        h1 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
          font-weight: 300;
          margin-top: 1rem;
        }
      }
    }
  }
`;
