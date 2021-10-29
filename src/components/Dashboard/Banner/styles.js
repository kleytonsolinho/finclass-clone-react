import styled from 'styled-components';

export const SlideHero = styled.section`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const SlideGallery = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 88px 2rem;
  flex: none;


  background-image: url(${(props) => (props.bg)});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80%;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
`;

export const Description = styled.div`
  width: 50%;
  height: 400px;

  display: flex;
  align-items: flex-end;
`;

export const Text = styled.div`
  position: relative;
  flex: 1;
  max-width: 488px;

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
`;

export const ButtonContainer = styled.div`
  max-width: 344px;
  margin-top: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  .icon {
    margin-right: 5px;
  }

  button {
    width: 160px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

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
`;

export const Expert = styled.div`
  width: 50%;
  height: 400px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ExpertContent = styled.div`
  max-width: 488px;

  position: relative;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  text-align: right;

  h1 {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: -0.005em;
  }

  span {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      font-weight: 300;
      color: #ffffff;
      opacity: 0.8;
  }
`;

export const ImageExpert = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  overflow: hidden;

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`;

export const Controls = styled.div`
  width: 100%;
  height: 20px;
  padding: 2rem 0;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.button`
  margin-left: 0.7rem;
  font-size: 0.8rem;
  color: ${(props) => (props.toggle)};
  background: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;

  position: absolute;
  bottom: -17px;
  left: 0;
  background-image: linear-gradient(transparent, #000);
`;
