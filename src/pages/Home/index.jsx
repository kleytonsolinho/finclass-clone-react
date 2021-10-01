import { useNavbarScroll } from '../../hooks/useNavbarScroll';

import Header from '../../components/HomeComponents/Header';
import Banner from '../../components/HomeComponents/Banner';
import Subscribebar from '../../components/HomeComponents/Subscribebar';

import Carousel from '../../components/HomeComponents/Carousel';
import Categorys from '../../components/HomeComponents/Categorys';
import Video from '../../components/HomeComponents/Video';

export default function Home() {
  const { isVisible } = useNavbarScroll();

  return (
    <>
      <Header />
      <Banner />
      {isVisible && <Subscribebar />}
      <Carousel />
      <Categorys />
      <Video />
    </>
  );
}
