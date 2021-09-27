import { Container, Copyright } from './styles';

import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';
import logoImg from '../../../assets/images/site/logo.d1d735e3.svg';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <Container>
      <div className="nav-menu-footer">
        <section>
          <img src={logoImg} alt="" />
        </section>
        <section>
          <ul>
            <li>Conteúdos</li>
            <a href="/"><li>Finclasses</li></a>
            <a href="/"><li>Finseries</li></a>
            <a href="/"><li>Finbooks</li></a>
          </ul>
        </section>
        <section>
          <ul>
            <li>Links úteis</li>
            <a href="/"><li>Termos de Uso</li></a>
            <a href="/"><li>Política de Privacidade</li></a>
          </ul>
        </section>
        <section>
          <ul>
            <li>Redes Socias</li>
            <a href="/"><li>Instagram</li></a>
            <a href="/"><li>Youtube</li></a>
          </ul>
        </section>
        <section>
          <ul>
            <li>Fale Conosco</li>
            <a href="/"><li>Central de ajuda</li></a>
            <a href="/"><li>Fale com o DPO</li></a>
            <a href="/"><li>Contato</li></a>
            <a href="/"><li>FAQ</li></a>
          </ul>
        </section>
      </div>
      <Copyright>
        <p>2021 © Todos os direitos reservados. Finclass</p>
        <div className="toTheTop">
          <span>Voltar para o topo</span>
          <button
            type="button"
            onClick={scrollToTop}
          >
            <img src={arrowImg} alt="" width={40} height={40} />
          </button>
        </div>
      </Copyright>
    </Container>
  );
}
