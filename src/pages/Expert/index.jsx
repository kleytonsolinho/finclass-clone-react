import Header from '../../components/DashboardComponents/Header';
import Banner from '../../components/DashboardComponents/Banner';
import ListClass from '../../components/DashboardComponents/ListClass/index';
import FinclassesCarousel from '../../components/DashboardComponents/FinclassesCarousel/index';
import Footer from '../../components/DashboardComponents/Footer';

import dataFinclasses from '../../data/dataFinclasses';

import imgFinclasses from '../../assets/images/site/finclassSingular.434bd9e1.svg';

export default function Expert() {
  return (
    <>
      <Header />
      <Banner />
      <ListClass />
      <FinclassesCarousel imgCategory={imgFinclasses} data={dataFinclasses} />
      <Footer />
    </>
  );
}
