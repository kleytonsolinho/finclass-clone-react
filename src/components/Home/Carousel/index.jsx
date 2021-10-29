import { useRef } from 'react';

import learningIcon from '../../../assets/images/site/mastermind.svg';
import arrowImg from '../../../assets/images/site/icon-arrow-circle-down.svg';

import dataCarousel from '../../../data/dataCarousel';

import {
  Container,
  Header,
  Title,
  Description,
  ContentSlide,
  Controls,
  Gallery,
  Card,
} from './styles';

export default function Carousel() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 265;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 265;
  };

  return (
    <Container>
      <Header>
        <img src={learningIcon} alt="" />
        <Title>
          <span>Conheça </span>
          os seus mentores
        </Title>
        <Description>
          Os professores da Finclass são os maiores especialistas do mercado
          financeiro mundial.
        </Description>
      </Header>
      <ContentSlide>
        <Controls>
          <button type="button" onClick={handleLeftClick}>
            <img src={arrowImg} alt="Left" className="arrowLeft" width={55} height={55} />
          </button>
          <button type="button" onClick={handleRightClick}>
            <img src={arrowImg} alt="Right" className="arrowRight" width={55} height={55} />
          </button>
        </Controls>
        <Gallery ref={carousel}>
          {dataCarousel.map((item) => (
            <Card key={item.id}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </Card>
          ))}
        </Gallery>
      </ContentSlide>
    </Container>
  );
}
