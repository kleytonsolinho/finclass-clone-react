import { Container, Copyright } from './styles';

import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';
import logoImg from '../../../assets/images/site/logo-finclass.svg';

import separatorImg from '../../../assets/images/site/separator-foot.svg';

import appleStore from '../../../assets/images/site/apple_footer.svg';
import googleStore from '../../../assets/images/site/google_footer.svg';

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
          <div>
            <img src={separatorImg} alt="" className="separator" />
            <p>
              Aprenda finanças com os
              <br />
              melhores do mundo.
            </p>
          </div>
        </section>
        <section>
          <ul>
            <li><strong>Transparência</strong></li>
            <a href="/"><li>Termos de uso</li></a>
            <a href="/"><li>Política de Privacidade</li></a>
            <a href="/"><li>Proteja sua privacidade</li></a>
          </ul>
        </section>
        <section>
          <ul>
            <li><strong>Fale conosco</strong></li>
            <a href="/"><li>Contato</li></a>
          </ul>
        </section>
        <section>
          <ul>
            <li><strong>Redes Socias</strong></li>
            <a href="/"><li>Instagram</li></a>
            <a href="/"><li>Youtube</li></a>
          </ul>
        </section>
        <section>
          <ul>
            <li><strong>Baixe nosso app</strong></li>
            <div className="app-store">
              <a href="/">
                <img src={appleStore} alt="Apple Store" />
              </a>
              <a href="/">
                <img src={googleStore} alt="Google Store" />
              </a>
            </div>
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
