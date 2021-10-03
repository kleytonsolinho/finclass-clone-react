import { useState } from 'react';

import Beginner from './Beginner';
import Intermediary from './Intermediary';
import Advanced from './Advanced';

import iconSchool from '../../../assets/images/site/icon-school.svg';
import iconUser from '../../../assets/images/site/user-icon-prof.svg';
import iconButton from '../../../assets/images/site/begg.svg';

import {
  Container, Header, User, SelectTrail, LineBegginer, LineAdvanced,
} from './styles';

export default function Timeline() {
  const [trailSelect, setTrailSelect] = useState(1);

  function tooggleTrail(n) {
    setTrailSelect(n);
  }

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
          <button
            type="button"
            onClick={() => tooggleTrail(1)}
            className={trailSelect === 1 ? 'active-btn' : null}
          >
            <img src={iconButton} alt="" />
            Iniciante
          </button>
          <button
            type="button"
            onClick={() => tooggleTrail(2)}
            className={trailSelect === 2 ? 'active-btn' : null}
          >
            <img src={iconButton} alt="" />
            Intermediário
          </button>
          <button
            type="button"
            onClick={() => tooggleTrail(3)}
            className={trailSelect === 3 ? 'active-btn' : null}
          >
            <img src={iconButton} alt="" />
            Avançado
          </button>
        </div>
        <LineBegginer
          trailSelect={trailSelect}
          className={
            trailSelect === 1 ? 'active-b' : null
          }
        />
        <LineAdvanced
          className={trailSelect === 3 ? 'active-a' : null}
        />
      </SelectTrail>
      {trailSelect === 1 && <Beginner />}
      {trailSelect === 2 && <Intermediary />}
      {trailSelect === 3 && <Advanced />}
    </Container>
  );
}
