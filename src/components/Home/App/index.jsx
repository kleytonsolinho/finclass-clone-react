import appIcon from '../../../assets/images/site/app-icon.svg';
import imgApp from '../../../assets/images/site/app-finclass-financas.webp';

import downloadImg from '../../../assets/images/site/download.svg';
import trailsImg from '../../../assets/images/site/trails-icon.svg';
import materialImg from '../../../assets/images/site/material.svg';
import classImg from '../../../assets/images/site/class-ava.svg';

import appleStore from '../../../assets/images/site/apple_footer.svg';
import googleStore from '../../../assets/images/site/google_footer.svg';

import lineIcon from '../../../assets/images/site/line-finclass.svg';

import {
  Container,
  Content,
  Left,
  Right,
} from './styles';

export default function App() {
  return (
    <Container>
      <img src={appIcon} alt="" className="mg-top" />
      <h1>
        <strong>Conheça </strong>
        nosso app
      </h1>
      <Content>
        <Left>
          <p>
            Aprender com os melhores do
            <br />
            mundo, onde e quando você quiser.
          </p>
          <img src={imgApp} alt="App de finanças - Finclass" />
        </Left>
        <Right>
          <ul>
            <li>
              <img src={downloadImg} alt="" />
              <div>
                <strong>Baixe e assista offline</strong>
                <p>
                  Baixe e assista offline os seus conteúdos preferidos e
                  continue de onde parou.
                </p>
              </div>
            </li>
            <li>
              <img src={lineIcon} alt="" />
            </li>
            <li>
              <img src={trailsImg} alt="" />
              <div>
                <strong>Trilhas de conhecimento</strong>
                <p>
                  Elas te guiarão para que você não perca tempo e aproveite melhore
                  o conhecimento disponível para você.
                </p>
              </div>
            </li>
            <li>
              <img src={lineIcon} alt="" />
            </li>
            <li>
              <img src={materialImg} alt="" />
              <div>
                <strong>Materiais complementares</strong>
                <p>
                  Tenha e-books e diversos materiais complementares exclusivos
                  para que você melhore ainda mais o seu nível de aprendizado.
                </p>
              </div>
            </li>
            <li>
              <img src={lineIcon} alt="" />
            </li>
            <li>
              <img src={classImg} alt="" />
              <div>
                <strong>+130 aulas já disponíveis</strong>
                <p>
                  Mais de 130 aulas para assistir e continuar a sua jornada com
                  novos conteúdos todos os meses.
                </p>
              </div>
            </li>
            <li>
              <img src={lineIcon} alt="" />
            </li>
          </ul>
          <div className="app-store">
            <a href="/">
              <img src={appleStore} alt="Apple Store" />
            </a>
            <a href="/">
              <img src={googleStore} alt="Google Store" />
            </a>
          </div>
        </Right>
      </Content>
    </Container>
  );
}
