import { useNavbarScroll } from '../../hooks/useNavbarScroll';

import Header from '../../components/HomeComponents/Header';

import Banner from '../../components/HomeComponents/Banner';
import Carousel from '../../components/HomeComponents/Carousel';
import Categorys from '../../components/HomeComponents/Categorys';
import Video from '../../components/HomeComponents/Video';
import App from '../../components/HomeComponents/App';
import Timeline from '../../components/HomeComponents/Timeline';
import Testimonials from '../../components/HomeComponents/Testimonials';
import Faq from '../../components/HomeComponents/Faq';
import AppFooter from '../../components/HomeComponents/AppFooter';

import Footer from '../../components/HomeComponents/Footer';
import Subscribebar from '../../components/HomeComponents/Subscribebar';

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
        <Timeline />
        <Testimonials />
        <Faq />
        <AppFooter />
      </main>
      <Footer />
      {isVisible && <Subscribebar />}
    </>
  );
}
