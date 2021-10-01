import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FaCaretRight, FaPlus, FaCircle,
} from 'react-icons/fa';

import {
  SlideHero, SlideGallery, Container, Shadow, Content, Controls, Select,
} from './styles';

import dataBanner from '../../../data/dataBanner';

export default function Banner() {
  const banner = useRef(null);
  const history = useHistory();
  const [selectBanner, setSelectBanner] = useState(1);

  function handleExpert(e) {
    e.preventDefault();

    history.push('/dashboard/expert');
  }

  useEffect(() => {
    const autoPlay = setTimeout(() => {
      setSelectBanner(selectBanner + 1);

      if (selectBanner >= 3) {
        setSelectBanner(1);
      }
    }, 3000);
    return () => {
      clearTimeout(autoPlay);
    };
  });

  useEffect(() => {
    if (selectBanner === 1) {
      banner.current.scrollLeft = 0;
    }

    if (selectBanner === 2) {
      banner.current.scrollLeft = window.innerWidth;
    }

    if (selectBanner === 3) {
      banner.current.scrollLeft += window.innerWidth * 2;
    }
  }, [selectBanner]);

  return (
    <SlideHero>
      <SlideGallery ref={banner}>
        {dataBanner.map((item) => (
          <Container key={item.id} bg={item.imgBanner}>
            <Content>
              <div className="description">
                <div className="text">
                  <img src={item.imgCategory} alt="" />
                  <h1>{item.tittle}</h1>
                  <p>
                    {item.description}
                  </p>
                  <div className="btns">
                    <button type="button" onClick={handleExpert}>
                      <FaCaretRight className="icon" />
                      {' '}
                      assistir
                    </button>
                    <button type="button" onClick={handleExpert}>
                      <FaPlus className="icon" />
                      {' '}
                      detalhes
                    </button>
                  </div>
                </div>
              </div>
              <div className="details">
                <div className="expert">
                  <div className="perfilProf">
                    <img src={item.imgProfile} alt="" />
                  </div>
                  <h1>{item.author}</h1>
                  <span>{item.company}</span>
                </div>
              </div>
            </Content>
          </Container>
        ))}
      </SlideGallery>
      <Controls>
        {dataBanner.map((item) => (
          <Select
            id={`control-${item.id}`}
            onClick={() => setSelectBanner(item.id)}
            tooggle={selectBanner === item.id ? '#00e7f9' : '#ffffff'}
          >
            <FaCircle />
          </Select>
        ))}
      </Controls>
      <Shadow />
    </SlideHero>
  );
}
