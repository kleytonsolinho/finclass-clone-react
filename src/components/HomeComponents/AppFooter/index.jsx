import { useHistory } from 'react-router-dom';
import Button from '../../Global/Buttondefault';

import imgApp from '../../../assets/images/site/assine-finclass.webp';

import ctaImg from '../../../assets/images/site/cta-icon.svg';

import {
  Group, BgBarGradient, BgBar, Container, Content, Left, Right,
} from './styles';

export default function AppFooter() {
  const history = useHistory();

  function handleSubmit() {
    history.push('/register');
  }
  return (
    <Group>
      <BgBarGradient>
        <div className="top" />
        <div className="bottom" />
      </BgBarGradient>
      <BgBar />
      <Container>
        <Content>
          <Left>
            <img src={imgApp} alt="Assine agora" />
          </Left>
          <Right>
            <img src={ctaImg} alt="" />
            <h1>
              <strong>Aprenda finanças</strong>
              <br />
              de verdade
            </h1>
            <p>
              Baixe e assista offline os seus conteúdos preferidos e
              continue de onde parou.
            </p>
            <span>a partir de</span>
            <div>
              <h2>R$ 39,90</h2>
              <strong>/mês no plano anual</strong>
            </div>
            <Button
              width={80}
              primary
              color="#00e7f9"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Assine agora
            </Button>
          </Right>
        </Content>
      </Container>
    </Group>
  );
}
