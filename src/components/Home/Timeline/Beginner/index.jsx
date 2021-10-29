import grupoIcon0 from '../../../../assets/images/site/Group_0.svg';
import grupoIcon1 from '../../../../assets/images/site/Group_1.svg';
import grupoIcon2 from '../../../../assets/images/site/Group_2.svg';
import grupoIcon3 from '../../../../assets/images/site/Group_3.svg';

import h1Line from '../../../../assets/images/site/lhl.svg';
import circleIcon from '../../../../assets/images/site/circle.svg';

import { TrailContent } from './styles';

export default function Beginner() {
  return (
    <TrailContent>
      <ul>
        <li className="left">
          <img src={grupoIcon0} alt="" className="icon" />
          <div className="description">
            <h1>Aprenda do zero a investir</h1>
            <p>
              Tenha conteúdos introdutórios para
              você começar a investir do jeito certo.
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
          <img src={grupoIcon1} alt="" className="icon" />
          <div className="description">
            <h1>Conceitos Fundamentais</h1>
            <p>
              Entenda os principais conceitos do mercado financeiro com uma
              curadoria de conteúdo para que você não aprenda conceitos errados.
            </p>
          </div>
        </li>
        <li className="left">
          <img src={grupoIcon2} alt="" className="icon" />
          <div className="description">
            <h1>Glossários e materiais especiais</h1>
            <p>
              Tenha auxílio de materiais complementares especiais para que Você
              consiga aprender de verdade como funciona o mercado.
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
          <img src={grupoIcon3} alt="" className="icon" />
          <div className="description">
            <h1>Tire suas dúvidas</h1>
            <p>
              Tenha um suporte para tirar todas as suas dúvidas relacionadas ao
              conteúdo da plataforma.
            </p>
          </div>
        </li>
      </ul>
    </TrailContent>
  );
}
