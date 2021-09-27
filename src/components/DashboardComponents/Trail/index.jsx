import { Container, Content } from './styles';

import imgTrail from '../../../assets/images/site/icon-trilha.f1961c83.svg';
import imgIcon from '../../../assets/images/site/arrow-right.0da26cf8.svg';

export default function Trail() {
  return (
    <Container>
      <h3>Trilhas de conhecimento</h3>
      <Content>
        <div className="box">
          <header>
            <div className="tittle">
              <img src={imgTrail} alt="" />
              <p>Iniciante</p>
            </div>
            <div className="btn">
              <span>assistir</span>
              <img src={imgIcon} alt="" />
            </div>
          </header>
          <p>
            {' '}
            Comece no mundo dos investimentos e aprenda os fundamentos do
            mercado com temas abrangentes.
            {' '}
          </p>
        </div>
        <div className="box">
          <header>
            <div className="tittle">
              <img src={imgTrail} alt="" />
              <p>Intermediário</p>
            </div>
            <div className="btn">
              <span>assistir</span>
              <img src={imgIcon} alt="" />
            </div>
          </header>
          <p>
            {' '}
            Siga essa trilha para conhecer novas possibilidades através de
            temas sobre investimentos.
            {' '}
          </p>
        </div>
        <div className="box">
          <header>
            <div className="tittle">
              <img src={imgTrail} alt="" />
              <p>Avançado</p>
            </div>
            <div className="btn">
              <span>assistir</span>
              <img src={imgIcon} alt="" />
            </div>
          </header>
          <p>
            {' '}
            Descubra uma seleção de conteúdos com temas mais específicos
            sobre o mercado financeiro.
            {' '}
          </p>
        </div>
      </Content>
    </Container>
  );
}
