import classesIcon from '../../../assets/images/site/classes-icon.svg';
import finClasses from '../../../assets/images/site/finclass.svg';
import finSeries from '../../../assets/images/site/finseries.svg';
import finBooks from '../../../assets/images/site/finbooks.svg';

import icon1 from '../../../assets/images/site/icon_1.svg';
import icon2 from '../../../assets/images/site/icon_2.svg';
import icon3 from '../../../assets/images/site/icon_3.svg';
import icon4 from '../../../assets/images/site/icon_4.svg';
import icon5 from '../../../assets/images/site/icon_5.svg';
import icon6 from '../../../assets/images/site/icon_6.svg';
import icon7 from '../../../assets/images/site/icon_7.svg';
import icon8 from '../../../assets/images/site/icon_8.svg';
import icon9 from '../../../assets/images/site/icon_9.svg';
import icon10 from '../../../assets/images/site/icon_10.svg';
import icon11 from '../../../assets/images/site/icon_11.svg';
import icon12 from '../../../assets/images/site/icon_12.svg';

import lineIcon from '../../../assets/images/site/line-finclass.svg';

import {
  Container, Content, Left, Right,
} from './styles';

export default function Categorys() {
  return (
    <Container>
      <img src={classesIcon} alt="" className="mg-top" />
      <Content>
        <Left>
          <h1>
            <strong>Conheça</strong>
            <br />
            nossos contéudos
          </h1>
          <ul>
            <li>
              <img src={finClasses} alt="" />
              <p>
                Aulas com alto nível de produção sobre diversos assuntos
                relacionados a investimentos e finanças, onde você é ensinado
                por grandes especialistas do mercado.
              </p>
              <img src={lineIcon} alt="" />
            </li>
            <li>
              <img src={finSeries} alt="" />
              <p>
                Documentários originais que visam um entretenimento relacionado ao
                mundo do dinheiro, trazendo grandes experts mundiais.
              </p>
              <img src={lineIcon} alt="" />
            </li>
            <li>
              <img src={finBooks} alt="" />
              <p>
                Insights sobre os melhores livros de investimentos, economia e
                dinheiro vindos de pessoas que estudaram a fundo esses livros.
              </p>
              <img src={lineIcon} alt="" />
            </li>
          </ul>
        </Left>
        <Right>
          <ul>
            <li>
              <img src={icon1} alt="" />
              <p>Tesouro Direto</p>
            </li>
            <li>
              <img src={icon2} alt="" />
              <p>Fundamentos da Bolsa</p>
            </li>
            <li>
              <img src={icon3} alt="" />
              <p>Criptomoedas</p>
            </li>
            <li>
              <img src={icon4} alt="" />
              <p>Renda Fixa</p>
            </li>
            <li>
              <img src={icon5} alt="" />
              <p>Análise de Indicadores</p>
            </li>
            <li>
              <img src={icon6} alt="" />
              <p>Fundos de Investimento</p>
            </li>
            <li>
              <img src={icon7} alt="" />
              <p>Finanças Públicas</p>
            </li>
            <li>
              <img src={icon8} alt="" />
              <p>Diversificação</p>
            </li>
            <li>
              <img src={icon9} alt="" />
              <p>Reserva de Valor</p>
            </li>
            <li>
              <img src={icon10} alt="" />
              <p>Vieses Comportamentais</p>
            </li>
            <li>
              <img src={icon11} alt="" />
              <p>Equity</p>
            </li>
            <li>
              <img src={icon12} alt="" />
              <p>Outros</p>
            </li>
          </ul>
        </Right>
      </Content>
    </Container>
  );
}
