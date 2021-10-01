import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../Global/Buttondefault';

import appFinclass from '../../../assets/images/site/app-finclass.webp';
import lightningIcon from '../../../assets/images/site/thunder-lightning-circle.svg';
import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';

import { Container } from './styles';

export default function Banner() {
  const history = useHistory();

  function handleSubmit() {
    history.push('/register');
  }
  return (
    <Container>
      <section className="content">
        <div>
          <strong>Conhecimento como um ativo</strong>
          <img src={lightningIcon} alt="icon" />
        </div>
        <h1>
          Aprenda a investir do
          <br />
          zero com os melhores
        </h1>
        <p>
          Conquiste sua liberdade financeira e entre para o mundo dos
          <br />
          investimentos com os maiores especialistas do mercado.
        </p>
        <Button
          width={50}
          primary
          color="#00e7f9"
          type="submit"
          onClick={() => handleSubmit()}
        >
          Assine agora
        </Button>
        <span>
          Assine a partir de
          <strong> R$ 39,90/mês no plano anual.</strong>
        </span>
        <div>
          <p>Descubra como </p>
          <img src={arrowImg} alt="icon" />
        </div>
      </section>

      <div className="img">
        <img src={appFinclass} alt="app finclass" />
      </div>
    </Container>
  );
}
