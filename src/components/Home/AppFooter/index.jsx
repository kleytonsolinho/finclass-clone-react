import { useHistory } from 'react-router-dom';
import Button from '../../Global/Form/Button';

import imgApp from '../../../assets/images/site/assine-finclass.webp';

import ctaImg from '../../../assets/images/site/cta-icon.svg';

import {
  Wrapper,
  BackgroundBar,
  Gradient,
  Top,
  Bottom,
  Container,
  Content,
  Left,
  Right,
  Title,
  Description,
  PricePlans,
} from './styles';

export default function AppFooter() {
  const history = useHistory();

  function handleToRegister() {
    history.push('/register');
  }
  return (
    <Wrapper>
      <BackgroundBar>
        <Gradient>
          <Top />
          <Bottom />
        </Gradient>
      </BackgroundBar>
      <Container>
        <Content>
          <Left>
            <img src={imgApp} alt="Assine agora" />
          </Left>
          <Right>
            <img src={ctaImg} alt="" />
            <Title>
              <strong>Aprenda finanças</strong>
              <br />
              de verdade
            </Title>
            <Description>
              Baixe e assista offline os seus conteúdos preferidos e
              continue de onde parou.
            </Description>
            <span>a partir de</span>
            <PricePlans>
              <h2>R$ 39,90</h2>
              <strong>/mês no plano anual</strong>
            </PricePlans>
            <Button
              width={80}
              primary
              color="#00e7f9"
              type="submit"
              onClick={() => handleToRegister()}
            >
              Assine agora
            </Button>
          </Right>
        </Content>
      </Container>
    </Wrapper>
  );
}
