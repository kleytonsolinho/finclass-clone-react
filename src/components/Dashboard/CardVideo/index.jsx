import {
  Container,
  Thumbnail,
  Info,
  ProgressContainer,
} from './styles';

export default function CardVideo({ data, description }) {
  return (
    <Container>
      <Thumbnail>
        <ProgressContainer>
          <div className="bar" />
        </ProgressContainer>
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
