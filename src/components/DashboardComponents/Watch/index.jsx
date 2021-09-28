import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';

import ItemVideoList from '../ItemVideoList';

import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';
import imgTeacher from '../../../assets/images/aulas/Thiago-nigro-min.jpg';

import dataClass from '../../../data/dataClass';

import {
  Container, ContentPlayer, ContentInfo, Header, Player, VideoList, Resume, Info, Teacher, About,
} from './styles';

export default function Watch() {
  return (
    <Container>
      <Header>
        <Link to="/dashboard/expert">
          <img src={arrowImg} alt="" />
        </Link>
        <h1>Trailer</h1>
      </Header>
      <ContentPlayer>
        <Player>
          <iframe width="830" height="465" src="https://www.youtube.com/embed/851RnVMicWI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Player>
        <VideoList>
          <div className="top">
            <h1>Todos episódios</h1>
          </div>
          <div className="list">
            {dataClass.map((item) => (
              <a key={item.id} href="/dashboard/expert/watch">
                <div className="item">
                  <ItemVideoList data={item} description={false} />
                </div>
              </a>
            ))}
          </div>
        </VideoList>
      </ContentPlayer>
      <ContentInfo>
        <Resume>
          <h1>Resumo finclass</h1>
          <div>
            <FaRegCalendarAlt />
            <span>Lançamento:</span>
            <strong>26/04/2021</strong>
          </div>
        </Resume>
        <Info>
          <Teacher>
            <div className="foto">
              <img src={imgTeacher} alt="" />
            </div>
            <div className="name">
              <h1>Thiago Nigro</h1>
              <span>Grupo Primo</span>
            </div>
          </Teacher>
          <About>
            <h1>Sobre</h1>
            <p>
              Aprenda como diversificar sua carteira e ganhar dinheiro no longo
              prazo com Thiago Nigro, o o maior influenciador de finanças do mundo.
            </p>
          </About>
        </Info>
      </ContentInfo>
    </Container>
  );
}
