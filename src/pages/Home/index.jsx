import { useNavbarScroll } from '../../hooks/useNavbarScroll';

import Header from '../../components/Home/Header';

import Banner from '../../components/Home/Banner';
import Carousel from '../../components/Home/Carousel';
import Categorys from '../../components/Home/Categorys';
import Video from '../../components/Home/Video';
import App from '../../components/Home/App';
import Timeline from '../../components/Home/Timeline';
import Testimonials from '../../components/Home/Testimonials';
import Faq from '../../components/Home/Faq';
import AppFooter from '../../components/Home/AppFooter';

import Footer from '../../components/Home/Footer';
import Subscribebar from '../../components/Home/Subscribebar';

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
