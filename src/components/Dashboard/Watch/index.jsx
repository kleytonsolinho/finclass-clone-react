import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';

import CardVideo from '../CardVideo';

import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';
import imgTeacher from '../../../assets/images/aulas/Thiago-nigro-min.jpg';

import dataClasses from '../../../data/dataClass';

import {
  Container,
  Header,
  Title,
  ContentPlayer,
  ContentInfo,
  Player,
  VideoList,
  VideoListHeader,
  VideoListContainer,
  Resume,
  Info,
  Teacher,
  TeacherImage,
  TeacherInfo,
  About,
} from './styles';

export default function Watch() {
  return (
    <Container>
      <Header>
        <Link to="/dashboard/expert">
          <img src={arrowImg} alt="" />
        </Link>
        <Title>Trailer</Title>
      </Header>
      <ContentPlayer>
        <Player>
          <iframe width="830" height="465" src="https://www.youtube.com/embed/851RnVMicWI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Player>
        <VideoList>
          <VideoListHeader>
            <h1>Todos episódios</h1>
          </VideoListHeader>
          <VideoListContainer>
            {dataClasses.map((item) => (
              <a key={item.id} href="/dashboard/expert/watch">
                <div className="item">
                  <CardVideo data={item} description={false} />
                </div>
              </a>
            ))}
          </VideoListContainer>
        </VideoList>
      </ContentPlayer>
      <ContentInfo>
        <Resume>
          <Title>Resumo finclass</Title>
          <div>
            <FaRegCalendarAlt />
            <span>Lançamento:</span>
            <strong>26/04/2021</strong>
          </div>
        </Resume>
        <Info>
          <Teacher>
            <TeacherImage>
              <img src={imgTeacher} alt="" />
            </TeacherImage>
            <TeacherInfo>
              <h1>Thiago Nigro</h1>
              <span>Grupo Primo</span>
            </TeacherInfo>
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
