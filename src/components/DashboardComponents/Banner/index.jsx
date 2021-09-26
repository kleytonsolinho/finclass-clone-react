import { FaCaretRight, FaPlus } from 'react-icons/fa';

import { Container, Shadow, Content } from './styles';

import imgIcon from '../../../assets/images/site/finclassSingular.434bd9e1.svg';
import imgBruno from '../../../assets/images/site/Foto-professor-bruno-perini.jpg';

export default function Banner() {
  return (
    <Container>
      <Shadow />
      <Content>
        <div className="description">
          <div className="text">
            <img src={imgIcon} alt="" />
            <h1>Axiomas de Zurique</h1>
            <p>
              Axiomas de Zurique é um dos livros clássicos do mercado financeiro,
              e neste finbook você aprenderá quais são os segredos dos suíços para
              atingir a prosperidade e a riqueza, principalmente com
              investimentos
            </p>
            <div className="btns">
              <button type="button">
                <FaCaretRight className="icon" />
                {' '}
                assistir
              </button>
              <button type="button">
                <FaPlus className="icon" />
                {' '}
                detalhes
              </button>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="expert">
            <div className="perfilProf">
              <img src={imgBruno} alt="" />
            </div>
            <h1>Bruno Perini</h1>
            <span>Sócio Grupo Primo</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}
