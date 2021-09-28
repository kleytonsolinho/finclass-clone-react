import { Link } from 'react-router-dom';

import { FaRegCalendarAlt } from 'react-icons/fa';

import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';

import {
  Container, ContentPlayer, ContentInfo, Header, Player, VideoList, Resume, Info,
} from './styles';

export default function Watch() {
  return (
    <Container>
      <Header>
        <Link to="/expert">
          <img src={arrowImg} alt="" />
        </Link>
        <h1>Trailer</h1>
      </Header>
      <ContentPlayer>
        <Player>
          <iframe width="830" height="465" src="https://www.youtube.com/embed/851RnVMicWI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Player>
        <VideoList>
          <h1>Todos episódios</h1>
          <ul>
            <li>
              <img src="" alt="" />
              <div>
                <span>Teaser</span>
                <h2>Trailer</h2>
              </div>
            </li>
          </ul>
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
          info
        </Info>
      </ContentInfo>
    </Container>
  );
}
