import { useRef } from 'react';
import { Link } from 'react-router-dom';

import arrowImg from '../../../assets/images/site/arrow-slide-white.07deb364.svg';
import arrowRight from '../../../assets/images/site/arrow-right.0da26cf8.svg';

import {
  Container,
  SlideHeader,
  SlideContent,
  SlideGallery,
  Card,
  CardContent,
} from './styles';

export default function FinclassesCarousel({ imgCategory, data }) {
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
      <SlideHeader>
        <img src={imgCategory} alt="Finclasses" />
        {data.length >= 5 && (
          <div>
            <Link to="/">ver todos</Link>
            <img src={arrowRight} alt="" className="arrowR" />
          </div>
        )}
      </SlideHeader>
      <SlideContent>
        {data.length >= 5 && (
          <div>
            <button type="button" onClick={handleLeftClick}>
              <img src={arrowImg} alt="Left" width={55} height={55} />
            </button>
            <button type="button" onClick={handleRightClick}>
              <img src={arrowImg} alt="Right" width={55} height={55} />
            </button>
          </div>
        )}
        <SlideGallery ref={carousel}>
          {data.map((item) => (
            <Card key={item.id} href="/dashboard/expert">
              <img src={item.img} alt="" />
              <CardContent className="card-content">
                <h2>{item.category}</h2>
                <h1>{item.name}</h1>
                <span>{item.company}</span>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </SlideGallery>
      </SlideContent>
    </Container>
  );
}
