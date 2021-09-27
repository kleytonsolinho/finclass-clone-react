import { useRef } from 'react';
import { Link } from 'react-router-dom';

import imgIcon from '../../../assets/images/site/finclassSingular.434bd9e1.svg';
import arrowImg from '../../../assets/images/site/arrow-slide-white.07deb364.svg';
import arrowRight from '../../../assets/images/site/arrow-right.0da26cf8.svg';

import dataCarousel from '../../../data/dataFinclasses';

import { Container } from './styles';

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
        <Link to="/">
          ver todos
          <img src={arrowRight} alt="" className="arrowR" />
        </Link>
      </div>
      <section className="contentSlide">
        <div className="controls">
          <button type="button" onClick={handleLeftClick}>
            <img src={arrowImg} alt="Left" className="arrowLeft" width={55} height={55} />
          </button>
          <button type="button" onClick={handleRightClick}>
            <img src={arrowImg} alt="Right" className="arrowRight" width={55} height={55} />
          </button>
        </div>
        <div className="slideGalery" ref={carousel}>
          {dataCarousel.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
