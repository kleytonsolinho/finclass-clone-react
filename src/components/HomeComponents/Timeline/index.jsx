import iconSchool from '../../../assets/images/site/icon-school.svg';
import iconUser from '../../../assets/images/site/user-icon-prof.svg';
import iconButton from '../../../assets/images/site/begg.svg';

import grupoIcon0 from '../../../assets/images/site/Group_0.svg';
import h1Line from '../../../assets/images/site/lhl.svg';
import circleIcon from '../../../assets/images/site/circle.svg';

import {
  Container, Header, User, SelectTrail, TrailContent,
} from './styles';

export default function Timeline() {
  return (
    <Container>
      <Header>
        <img src={iconSchool} alt="Trilha de conhecimento" />
        <h1>
          <span>O que </span>
          você irá
          <br />
          aprender na Finclass
        </h1>
        <p>Você evolui junto com a gente</p>
      </Header>
      <User>
        <img src={iconUser} alt="Trilha de conhecimento" />
        <hr />
      </User>
      <SelectTrail>
        <div className="btns">
          <button type="button" className="active-btn">
            <img src={iconButton} alt="" />
            Iniciante
          </button>
          <button type="button">
            <img src={iconButton} alt="" />
            Intermediário
          </button>
          <button type="button">
            <img src={iconButton} alt="" />
            Avançado
          </button>
        </div>
        <div className="begginer active-b" />
        <div className="advanced" />
      </SelectTrail>
      <TrailContent>
        <ul>
          <li className="left">
            <img src={grupoIcon0} alt="" className="icon" />
            <div className="description">
              <h1>Aprenda do zero a investir</h1>
              <p>
                Tenha conteúdos introdutórios para
                <br />
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
            <img src={grupoIcon0} alt="" className="icon" />
            <div className="description">
              <h1>Aprenda do zero a investir</h1>
              <p>
                Tenha conteúdos introdutórios para
                <br />
                você começar a investir do jeito certo.
              </p>
            </div>
          </li>
          <li className="left">
            <img src={grupoIcon0} alt="" className="icon" />
            <div className="description">
              <h1>Aprenda do zero a investir</h1>
              <p>
                Tenha conteúdos introdutórios para
                <br />
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
            <img src={grupoIcon0} alt="" className="icon" />
            <div className="description">
              <h1>Aprenda do zero a investir</h1>
              <p>
                Tenha conteúdos introdutórios para
                <br />
                você começar a investir do jeito certo.
              </p>
            </div>
          </li>
        </ul>
      </TrailContent>
    </Container>
  );
}
