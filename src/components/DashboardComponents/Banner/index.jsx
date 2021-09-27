import { useState, useEffect, useRef } from 'react';

import {
  FaCaretRight, FaPlus, FaCircle,
} from 'react-icons/fa';

import {
  SlideHero, Container, Shadow, Content, Controls, Select,
} from './styles';

import dataBanner from '../../../data/dataBanner';

export default function Banner() {
  const banner = useRef(null);
  const [selectBanner, setSelectBanner] = useState(1);

  useEffect(() => {
    banner.current.scrollLeft += 200; // window.innerWidth;
  }, [selectBanner]);

  return (
    <SlideHero ref={banner}>
      <Shadow />
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
