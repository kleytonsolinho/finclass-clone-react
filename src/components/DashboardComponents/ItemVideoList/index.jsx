import { Container, Thumbnail, Info } from './styles';

export default function ItemVideoList({ data, description = true }) {
  return (
    <Container>
      <Thumbnail>
        <div className="progress">
          <div className="bar" />
        </div>
        <img src={data.img} alt="" />
        <span>{data.duration}</span>
      </Thumbnail>
      <Info>
        <span>{data.tag}</span>
        <h3>{data.tittle}</h3>
        {description && (
        <p>
          {data.description}
        </p>
        )}
      </Info>
    </Container>
  );
}
