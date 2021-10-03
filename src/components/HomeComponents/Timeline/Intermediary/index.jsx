import grupoIcon4 from '../../../../assets/images/site/Group_4.svg';
import grupoIcon5 from '../../../../assets/images/site/Group_5.svg';
import grupoIcon6 from '../../../../assets/images/site/Group_6.svg';
import grupoIcon7 from '../../../../assets/images/site/Group_7.svg';

import h1Line from '../../../../assets/images/site/lhl.svg';
import circleIcon from '../../../../assets/images/site/circle.svg';

import { TrailContent } from './styles';

export default function Intermediary() {
  return (
    <TrailContent>
      <ul>
        <li className="left">
          <img src={grupoIcon4} alt="" className="icon" />
          <div className="description">
            <h1>Aprenda análise de bolsa</h1>
            <p>
              Aprenda as diversas estratégias para você escolher as melhores
              ações e investimentos do mercado.
            </p>
          </div>
          <img src={h1Line} alt="" />
          <img src={circleIcon} alt="" />
        </li>
        <li className="right" />
        <li className="left" />
        <li className="right">
          <img src={circleIcon} alt="" />
          <img src={h1Line} alt="" />
          <img src={grupoIcon5} alt="" className="icon" />
          <div className="description">
            <h1>Invista melhor</h1>
            <p>
              Melhore a sua estratégia de investimento e consiga melhores
              retornos ao longo do tempo.
            </p>
          </div>
        </li>
        <li className="left">
          <img src={grupoIcon6} alt="" className="icon" />
          <div className="description">
            <h1>Aprofunde seus conhecimentos</h1>
            <p>
              Aprenda conceitos novos e técnicos sobre o mercado financeiro e
              melhore ainda mais a sua tomada de decisão.
            </p>
          </div>
          <img src={h1Line} alt="" />
          <img src={circleIcon} alt="" />
        </li>
        <li className="right" />
        <li className="left" />
        <li className="right">
          <img src={circleIcon} alt="" />
          <img src={h1Line} alt="" />
          <img src={grupoIcon7} alt="" className="icon" />
          <div className="description">
            <h1>Melhores professores</h1>
            <p>
              Faça tudo isso tendo acesso aos melhores profissionais do mercado
              e a professores que realmente entendem e vivem do mercado financeiro.
            </p>
          </div>
        </li>
      </ul>
    </TrailContent>
  );
}
