import { useRef } from 'react';
import { Link } from 'react-router-dom';

import arrowImg from '../../../assets/images/site/arrow-slide-white.07deb364.svg';
import arrowRight from '../../../assets/images/site/arrow-right.0da26cf8.svg';

import {
  Container,
  SlideHeader,
  SlideContent,
  SlideGallery,
  Controls,
  Card,
  CardContent,
} from './styles';

export default function Carousel({ imgCategory, dataSlides }) {
  const carousel = useRef(null);

  function handleLeftClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft -= 265;
  };

  function handleRightClick(e) {
    e.preventDefault();
    carousel.current.scrollLeft += 265;
  };

  return (
    <Container>
      <SlideHeader>
        <img src={imgCategory} alt="Finclasses" />
        {dataSlides.length >= 5 && (
          <div>
            <Link to="/">ver todos</Link>
            <img src={arrowRight} alt="" className="arrowR" />
          </div>
        )}
      </SlideHeader>
      <SlideContent>
        {dataSlides.length >= 5 && (
          <Controls>
            <button type="button" onClick={(event) => handleLeftClick(event)}>
              <img src={arrowImg} alt="Left" width={55} height={55} />
            </button>
            <button type="button" onClick={(event) => handleRightClick(event)}>
              <img src={arrowImg} alt="Right" width={55} height={55} />
            </button>
          </Controls>
        )}
        <SlideGallery ref={carousel}>
          {dataSlides.map((slide) => (
            <Card key={slide.id} href="/dashboard/expert">
              <img src={slide.img} alt="" />
              <CardContent className="card-content">
                <h2>{slide.category}</h2>
                <h1>{slide.name}</h1>
                <span>{slide.company}</span>
                <p>{slide.description}</p>
              </CardContent>
            </Card>
          ))}
        </SlideGallery>
      </SlideContent>
    </Container>
  );
}
