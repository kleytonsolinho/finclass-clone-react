import { useState, useEffect, useRef } from 'react';

import {
  FaCaretRight, FaPlus, FaCircle,
} from 'react-icons/fa';

import {
  SlideHero, SlideGallery, Container, Shadow, Content, Controls, Select,
} from './styles';

import dataBanner from '../../../data/dataBanner';

export default function Banner() {
  const banner = useRef(null);
  const [selectBanner, setSelectBanner] = useState(1);

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
      <Shadow />
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
                    <button type="button">
                      <FaCaretRight className="icon" />
                      {' '}
                      assistir
                    </button>
                    <button type="button">
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
        <Select
          onClick={() => setSelectBanner(1)}
          tooggle={selectBanner === 1 ? '#00e7f9' : '#ffffff'}
        >
          <FaCircle />
        </Select>
        <Select
          onClick={() => setSelectBanner(2)}
          tooggle={selectBanner === 2 ? '#00e7f9' : '#ffffff'}
        >
          <FaCircle />
        </Select>
        <Select
          onClick={() => setSelectBanner(3)}
          tooggle={selectBanner === 3 ? '#00e7f9' : '#ffffff'}
        >
          <FaCircle />
        </Select>
      </Controls>
    </SlideHero>
  );
}
