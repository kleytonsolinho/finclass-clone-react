import Header from '../../components/Dashboard/Header';
import Banner from '../../components/Dashboard/Banner';
import ListClass from '../../components/Dashboard/ListClass/index';
import FinclassesCarousel from '../../components/Dashboard/FinclassesCarousel/index';
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
        <FinclassesCarousel imgCategory={imgFinclasses} data={dataFinclasses} />
      </main>
      <Footer />
    </>
  );
}
