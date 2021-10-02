import { useState } from 'react';

import iconTestmonial from '../../../assets/images/site/icon-tesmonial.svg';
import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';

import imgTesti1 from '../../../assets/images/site/testi-1.webp';
import imgTesti2 from '../../../assets/images/site/testi-2.webp';
import imgTesti3 from '../../../assets/images/site/testi-3.webp';

import starIcon from '../../../assets/images/site/star.svg';
import quoteIcon from '../../../assets/images/site/quote.svg';

import {
  Container, Content, Left, Controls, Right,
} from './styles';

export default function Testimonials() {
  const [selectCard, setSelectCard] = useState(1);

  function handleClick(n) {
    if (selectCard >= 3) {
      setSelectCard(1);
      return;
    }

    if (selectCard <= 0) {
      setSelectCard(3);
      return;
    }

    setSelectCard(selectCard + n);
  }

  return (
    <Container>
      <img src={iconTestmonial} alt="" className="mg-top" />
      <h1>
        <strong>O que </strong>
        estão dizendo
        <br />
        sobre a Finclass
      </h1>
      <Content>
        <Left>
          <div
            className={selectCard === 1 ? 'user card-active' : 'user'}
          >
            <img src={imgTesti1} alt="" />
            <div>
              <p>Leticia Fagundes</p>
              <span>Empreendedora - Curitiba</span>
            </div>
          </div>
          <div
            className={selectCard === 2 ? 'user card-active' : 'user'}
          >
            <img src={imgTesti2} alt="" />
            <div>
              <p>Sara Rodrigues</p>
              <span>Gestora de Processos - São Paulo</span>
            </div>
          </div>
          <div
            className={selectCard === 3 ? 'user card-active' : 'user'}
          >
            <img src={imgTesti3} alt="" />
            <div>
              <p>Paulo Junqueira</p>
              <span>Gestor de Processos - São Paulo</span>
            </div>
          </div>
        </Left>
        <Controls>
          <button type="button" className="up" onClick={() => handleClick(1)}>
            <img src={arrowImg} alt="" />
          </button>
          <button type="button" onClick={() => handleClick(-1)}>
            <img src={arrowImg} alt="" />
          </button>
        </Controls>
        <Right>
          <div
            className={selectCard === 1 ? 'testimonials active' : 'testimonials'}
          >
            <strong>A finclass mudou minha vida</strong>
            <ul>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
            </ul>
            <img src={quoteIcon} alt="" />
            <p>
              A Finclass veio para revolucionar tudo o que já vimos no mercado
              financeiro. A oportunidade de ter tanta gente incrível e de tão
              alto nível na palma da minha mão me traz liberdade, muita bagagem
              enquanto eu estou aprendendo.
            </p>
            <p>
              Na Finclass está tudo organizado e “mastigado” para gente.
              Recomendo de olhos fechados, é a coisa mais incrível que eu já
              vi na internet. É literalmente uma Netflix dos investimentos -
              só que melhor!
            </p>
          </div>
          <div
            className={selectCard === 2 ? 'testimonials active' : 'testimonials'}
          >
            <strong>Os maiores mentores de finanças do mundo!</strong>
            <ul>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
            </ul>
            <img src={quoteIcon} alt="" />
            <p>
              A Finclass é muito completa, desde aulas, documentários e
              livros! Com os maiores mentores de finanças do mundo! Jeito
              leve de aprender finanças e realmente mudar de vida,
              aumentando a nossa famosa bola de neve e sair da corrida dos
              ratos e fazer o seu dinheiro trabalhar por nós! Uma maneira de
              aprender um pouco todos os dias sem ser cansativo, dentro da
              minha rotina! A finclass é excepcional!
            </p>
          </div>
          <div
            className={selectCard === 3 ? 'testimonials active' : 'testimonials'}
          >
            <strong>Jeito leve de aprender finanças </strong>
            <ul>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
              <li><img src={starIcon} alt="" /></li>
            </ul>
            <img src={quoteIcon} alt="" />
            <p>
              A plataforma tem um conceito incrível: incluir diversos temas
              relacionados a finanças em um mesmo lugar (aulas,
              documentários, livros, etc.).
            </p>
            <p>
              As autoridades sobre os temas, até o momento, estão ótimas
              (Braga sobre vieses, Giambiagi sofre finanças públicas e Breno
              Perrucho sobre o início dos investimentos). A plataforma está
              fácil de mexer, bem intuitiva e com um design muito bonito.
            </p>
          </div>
        </Right>
      </Content>
    </Container>
  );
}
