import { Link } from 'react-router-dom';
import { FaRegFilePdf, FaDownload, FaRegCommentDots } from 'react-icons/fa';

import dataClasses from '../../../data/dataClass';

import {
  Container,
  Title,
  Aulas,
  Card,
  Video,
  ProgressContainer,
  Info,
  Help,
  Materials,
  Question,
} from './styles';

export default function ListClass() {
  return (
    <Container>
      <Aulas>
        <Title>Episódios</Title>
        {dataClasses.map((item) => (
          <Card key={item.id} href="/dashboard/expert/watch">
            <Video>
              <ProgressContainer>
                <div className="bar" />
              </ProgressContainer>
              <img src={item.img} alt="" />
              <span>{item.duration}</span>
            </Video>
            <Info>
              <span>{item.tag}</span>
              <h3>{item.tittle}</h3>
              <p>
                {item.description}
              </p>
            </Info>
          </Card>
        ))}
      </Aulas>
      <Help>
        <Title>Materias complementares</Title>
        <Materials>
          <ul>
            <Link to="/">
              <li>
                <div>
                  <FaRegFilePdf />
                  <span>Ebook - diversificação</span>
                </div>
                <FaDownload />
              </li>
            </Link>
          </ul>
        </Materials>
        <Question>
          <FaRegCommentDots className="icon" />
          <h3>Envie uma dúvida</h3>
          <p>
            Ficou com uma dúvida sobre o conteúdo?
            Envie para gente! Estamos preparados para te responder.
          </p>
          <span>Escreva sua dúvida</span>
          <form>
            <textarea rows="4" />
          </form>
        </Question>
      </Help>
    </Container>
  );
}
