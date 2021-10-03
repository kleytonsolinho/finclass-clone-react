import styled from 'styled-components';

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
        transform: rotate(180deg);
      }

      img:nth-of-type(1) {
        width: 40px;
        height: 40px;
        position: absolute;
        left: -20px;
      }

      .icon {
        margin: 0 2rem;
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
