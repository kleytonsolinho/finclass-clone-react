import { useState, useEffect } from 'react';

import Header from '../../components/Navbar';
import Subscribebar from '../../components/Subscribebar';
import Button from '../../components/Buttondefault';

import Carousel from '../../components/Carousel';

import appFinclass from '../../assets/images/site/app-finclass-financas.webp';
import lightningIcon from '../../assets/images/site/thunder-lightning-circle.svg';
import arrowImg from '../../assets/images/site/icon-arrow-circle-down.svg';

import { Container } from './styles';

export default function Home() {
  const [isVisible, setisVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 150) {
      setisVisible(true);
      return;
    }
    setisVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <>
      <Header />

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
          <Button text="Assine agora" />
          <span>
            Assine a partir de
            <strong>R$ 39,90/mês no plano anual.</strong>
          </span>
          <div>
            <p>Descubra como </p>
            <img src={arrowImg} alt="" />
          </div>
        </section>

        <div className="img">
          <img src={appFinclass} alt="app finclass" />
        </div>
      </Container>

      {isVisible && <Subscribebar />}
      <Carousel />
    </>
  );
}
