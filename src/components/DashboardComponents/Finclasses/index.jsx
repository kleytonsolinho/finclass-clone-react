import { useRef } from 'react';
import { Link } from 'react-router-dom';

import imgIcon from '../../../assets/images/site/finclassSingular.434bd9e1.svg';
import arrowImg from '../../../assets/images/site/arrow-slide-white.07deb364.svg';
import arrowRight from '../../../assets/images/site/arrow-right.0da26cf8.svg';

import dataCarousel from '../../../data/dataFinclasses';

import { Container, Card } from './styles';

export default function Finclasses() {
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
      <div className="header">
        <img src={imgIcon} alt="Finclasses" />
        {dataCarousel.length >= 5 && (
          <div>
            <Link to="/">ver todos</Link>
            <img src={arrowRight} alt="" className="arrowR" />
          </div>
        )}
      </div>
      <section className="contentSlide">
        {dataCarousel.length >= 5 && (
          <div className="controls">
            <button type="button" onClick={handleLeftClick}>
              <img src={arrowImg} alt="Left" className="arrowLeft" width={55} height={55} />
            </button>
            <button type="button" onClick={handleRightClick}>
              <img src={arrowImg} alt="Right" className="arrowRight" width={55} height={55} />
            </button>
          </div>
        )}
        <div className="slideGalery" ref={carousel}>
          {dataCarousel.map((item) => (
            <Card key={item.id}>
              <img src={item.img} alt="" />
              <div className="card-content">
                <h2>{item.category}</h2>
                <h1>{item.name}</h1>
                <span>{item.company}</span>
                <p>{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
