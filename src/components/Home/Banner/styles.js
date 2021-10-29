import styled from 'styled-components';
import { Link } from 'react-scroll';

import imgBg from '../../../assets/images/site/bg-desktop.webp';

export const BannerHero = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: calc(100vh - 100px);
  min-height: 628px;

  background-image: url(${imgBg});
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  max-width: 1280px;
  height: calc(100vh - 100px);
  min-height: 628px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1280px) {
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  width: 50%;
  margin-top: 100px;
`;

export const SubTitle = styled.div`
  strong {
    margin-right: 10px;
    font-size: 1rem;
    font-weight: normal;
    line-height: 2rem;
    text-transform: uppercase;
    color: var(--cc-btn-primary-hover-bg);
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Description = styled.p`
  margin: 25px 0;

  font-size: 1rem;
  font-weight: 300;
`;

export const PlansPrice = styled.span`
  color: #86888d;
  font-weight: bold;

  strong {
    color: #ffffff;
  }
`;

export const ButtonToNextSectionContainer = styled.div`
  height: 32px;
  margin-top: 3rem;

  display: flex;
  align-items: center;

  line-height: 32px;

  p {
    margin-right: 1rem;
  }
`;

export const BannerImage = styled.div`
  width: 50%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonToNextSection = styled(Link)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
