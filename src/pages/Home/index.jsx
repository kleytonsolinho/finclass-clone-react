import { useNavbarScroll } from '../../hooks/useNavbarScroll';

import Header from '../../components/HomeComponents/Header';
import Banner from '../../components/HomeComponents/Banner';
import Subscribebar from '../../components/HomeComponents/Subscribebar';

import Carousel from '../../components/HomeComponents/Carousel';
import Categorys from '../../components/HomeComponents/Categorys';
import Video from '../../components/HomeComponents/Video';
import App from '../../components/HomeComponents/App';
import AppFooter from '../../components/HomeComponents/AppFooter';
import Faq from '../../components/HomeComponents/Faq';
import Footer from '../../components/HomeComponents/Footer';

export default function Home() {
  const { isVisible } = useNavbarScroll();

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Carousel />
        <Categorys />
        <Video />
        <App />
        <Faq />
        <AppFooter />
      </main>
      <Footer />
      {isVisible && <Subscribebar />}
    </>
  );
}
