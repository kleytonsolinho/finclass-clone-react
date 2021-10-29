import Header from '../../components/Dashboard/Header';
import Banner from '../../components/Dashboard/Banner';
import ListClass from '../../components/Dashboard/ListClass';
import Carousel from '../../components/Dashboard/Carousel';
import Footer from '../../components/Dashboard/Footer';

import dataFinclasses from '../../data/dataFinclasses';

import imgFinclasses from '../../assets/images/site/finclassSingular.434bd9e1.svg';

export default function Expert() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ListClass />
        <Carousel imgCategory={imgFinclasses} dataSlides={dataFinclasses} />
      </main>
      <Footer />
    </>
  );
}
