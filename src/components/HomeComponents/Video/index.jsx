import lightningIcon from '../../../assets/images/site/thunder-lightning-circle.svg';

import { Container } from './styles';

export default function Video() {
  return (
    <Container>
      <p>
        Mega investidor e bestseller
        <img src={lightningIcon} alt="icon" />
      </p>
      <h1>
        <strong>Lançamento </strong>
        Howard Marks
      </h1>
      <iframe src="https://www.youtube.com/embed/M0juBlRCJNc" title="Lançamento Howard Marks" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </Container>
  );
}
