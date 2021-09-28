import { Link } from 'react-router-dom';
import { FaRegFilePdf, FaDownload, FaRegCommentDots } from 'react-icons/fa';

import dataClass from '../../../data/dataClass';

import {
  Container, Aulas, Help, Card,
} from './styles';

export default function ListClass() {
  return (
    <Container>
      <Aulas>
        <h1>Episódios</h1>
        {dataClass.map((item) => (
          <Card key={item.id} href="/watch">
            <div className="video">
              <div className="progress">
                <div className="bar" />
              </div>
              <img src={item.img} alt="" />
              <span>{item.duration}</span>
            </div>
            <div className="info">
              <span>{item.tag}</span>
              <h3>{item.tittle}</h3>
              <p>
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </Aulas>
      <Help>
        <h1>Materias complementares</h1>
        <div className="materials">
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
        </div>
        <div className="question">
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
        </div>
      </Help>
    </Container>
  );
}
