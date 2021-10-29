import lightningIcon from '../../../assets/images/site/thunder-lightning-circle.svg';

import {
  Container,
  SubTitle,
  Title,
  PlayerVideo,
} from './styles';

export default function Video() {
  return (
    <Container>
      <SubTitle>
        Mega investidor e bestseller
        <img src={lightningIcon} alt="icon" />
      </SubTitle>
      <Title>
        <strong>Lançamento </strong>
        Howard Marks
      </Title>
      <PlayerVideo src="https://www.youtube.com/embed/M0juBlRCJNc" title="Lançamento Howard Marks" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </Container>
  );
}
