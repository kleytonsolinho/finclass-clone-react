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
    margin: 2rem 0;
    font-size: 2.5rem;
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
`;

export const LineBegginer = styled.div`
  width: 500px;
  height: 250px;
  position: relative;
  background: transparent;
  border-right: 1px solid ${(props) => (props.trailSelect === 2 ? '#00e7f9' : '#00e7f922')};
`;

export const LineAdvanced = styled.div`
  width: 500px;
  height: 250px;
  position: relative;
  background: transparent;
`;
