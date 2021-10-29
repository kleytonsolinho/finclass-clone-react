import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FaCaretRight, FaPlus, FaCircle,
} from 'react-icons/fa';

import {
  SlideHero,
  SlideGallery,
  BannerContainer,
  Shadow,
  BannerContent,
  Description,
  Text,
  ButtonContainer,
  Expert,
  ExpertContent,
  ImageExpert,
  Controls,
  Select,
} from './styles';

import dataBanner from '../../../data/dataBanner';

export default function Banner() {
  const slide = useRef(null);
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
      slide.current.scrollLeft = 0;
    }

    if (selectBanner === 2) {
      slide.current.scrollLeft = window.innerWidth;
    }

    if (selectBanner === 3) {
      slide.current.scrollLeft += window.innerWidth * 2;
    }
  }, [selectBanner]);

  return (
    <SlideHero>
      <SlideGallery ref={slide}>
        {dataBanner.map((banner) => (
          <BannerContainer key={banner.id} bg={banner.imgBanner}>
            <BannerContent>
              <Description>
                <Text>
                  <img src={banner.imgCategory} alt="" />
                  <h1>{banner.title}</h1>
                  <p>
                    {banner.description}
                  </p>
                  <ButtonContainer>
                    <button type="button" onClick={handleExpert}>
                      <FaCaretRight className="icon" />
                      assistir
                    </button>
                    <button type="button" onClick={handleExpert}>
                      <FaPlus className="icon" />
                      detalhes
                    </button>
                  </ButtonContainer>
                </Text>
              </Description>
              <Expert>
                <ExpertContent>
                  <ImageExpert>
                    <img src={banner.imgProfile} alt="" />
                  </ImageExpert>
                  <h1>{banner.author}</h1>
                  <span>{banner.company}</span>
                </ExpertContent>
              </Expert>
            </BannerContent>
          </BannerContainer>
        ))}
      </SlideGallery>
      <Controls>
        {dataBanner.map((banner) => (
          <Select
            key={banner.id}
            onClick={() => setSelectBanner(banner.id)}
            toggle={selectBanner === banner.id ? '#00e7f9' : '#ffffff'}
          >
            <FaCircle />
          </Select>
        ))}
      </Controls>
      <Shadow />
    </SlideHero>
  );
}
