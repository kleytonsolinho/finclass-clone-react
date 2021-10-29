import { Container } from './styles';

import Header from '../../components/Dashboard/Header';
import Banner from '../../components/Dashboard/Banner';
import Carousel from '../../components/Dashboard/Carousel';
import Trail from '../../components/Dashboard/Trail';
import Footer from '../../components/Dashboard/Footer';

import dataFinclasses from '../../data/dataFinclasses';
import dataFinseries from '../../data/dataFinseries';

import imgFinclasses from '../../assets/images/site/finclassSingular.434bd9e1.svg';
import imgFinseries from '../../assets/images/site/finseriesUpdated.f0595c89.svg';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Banner />
      <Carousel imgCategory={imgFinclasses} dataSlides={dataFinclasses} />
      <Carousel imgCategory={imgFinseries} dataSlides={dataFinseries} />
      <Trail />
      <Footer />
    </Container>
  );
}
