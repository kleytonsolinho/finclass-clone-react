import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../Global/Buttondefault';

import appFinclass from '../../../assets/images/site/app-finclass.webp';
import lightningIcon from '../../../assets/images/site/thunder-lightning-circle.svg';
import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';

import {
  BannerHero,
  Container,
  Content,
  SubTitle,
  Title,
  Description,
  PlansPrice,
  ButtonToNextSectionContainer,
  ButtonToNextSection,
  BannerImage,
} from './styles';

export default function Banner() {
  const history = useHistory();

  function handleToRegister() {
    history.push('/register');
  }
  return (
    <BannerHero>
      <Container>
        <Content>
          <SubTitle>
            <strong>Conhecimento como um ativo</strong>
            <img src={lightningIcon} alt="icon" />
          </SubTitle>
          <Title>
            Aprenda a investir do
            <br />
            zero com os melhores
          </Title>
          <Description>
            Conquiste sua liberdade financeira e entre para o mundo dos
            <br />
            investimentos com os maiores especialistas do mercado.
          </Description>
          <Button
            width={50}
            primary
            color="#00e7f9"
            type="submit"
            onClick={() => handleToRegister()}
          >
            Assine agora
          </Button>
          <PlansPrice>
            Assine a partir de
            <strong> R$ 39,90/mês no plano anual.</strong>
          </PlansPrice>
          <ButtonToNextSectionContainer>
            <p>Descubra como </p>
            <ButtonToNextSection
              to="slideGalery"
              smooth
              duration={1000}
            >
              <img src={arrowImg} alt="icon" />
            </ButtonToNextSection>
          </ButtonToNextSectionContainer>
        </Content>

        <BannerImage>
          <img src={appFinclass} alt="app finclass" />
        </BannerImage>
      </Container>
    </BannerHero>
  );
}
