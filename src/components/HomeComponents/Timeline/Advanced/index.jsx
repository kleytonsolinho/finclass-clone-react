import grupoIcon8 from '../../../../assets/images/site/Group_8.svg';
import grupoIcon9 from '../../../../assets/images/site/Group_9.svg';
import grupoIcon10 from '../../../../assets/images/site/Group_10.svg';
import grupoIcon11 from '../../../../assets/images/site/Group_11.svg';

import h1Line from '../../../../assets/images/site/lhl.svg';
import circleIcon from '../../../../assets/images/site/circle.svg';

import { TrailContent } from './styles';

export default function Intermediary() {
  return (
    <TrailContent>
      <ul>
        <li className="left">
          <img src={grupoIcon8} alt="" className="icon" />
          <div className="description">
            <h1>Aprofunde seu conhecimento</h1>
            <p>
              Aprenda conceitos novos e técnicos
              <br />
              sobre o mercado financeiro e melhore
              <br />
              ainda mais a sua tomada de decisão.
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
          <img src={grupoIcon9} alt="" className="icon" />
          <div className="description">
            <h1>Profissionalize-se no mercado</h1>
            <p>
              Adquira o cnhecimento que os melhores profissionais do mercado
              financeiro têm.
            </p>
          </div>
        </li>
        <li className="left">
          <img src={grupoIcon10} alt="" className="icon" />
          <div className="description">
            <h1>Atualize seus conhecimentos</h1>
            <p>
              Atualize-se com os conceitos mais importantes do mercado e sempre
              fique pode dentro das novas tendências e estratégias do mercado.
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
          <img src={grupoIcon11} alt="" className="icon" />
          <div className="description">
            <h1>Conteúdo Mensal</h1>
            <p>
              Tenha sempre um conteúdo novo
              <br />
              para assistir e continue sempre se
              atualizando das novidades do mercado.
            </p>
          </div>
        </li>
      </ul>
    </TrailContent>
  );
}
