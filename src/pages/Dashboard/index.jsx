import { Container } from './styles';

import Header from '../../components/DashboardComponents/Header';
import Banner from '../../components/DashboardComponents/Banner';
import FinclassesCarousel from '../../components/DashboardComponents/FinclassesCarousel';

import dataFinclasses from '../../data/dataFinclasses';
import dataFinseries from '../../data/dataFinseries';

import imgFinclasses from '../../assets/images/site/finclassSingular.434bd9e1.svg';
import imgFinseries from '../../assets/images/site/finseriesUpdated.f0595c89.svg';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Banner />
      <FinclassesCarousel imgCategory={imgFinclasses} data={dataFinclasses} />
      <FinclassesCarousel imgCategory={imgFinseries} data={dataFinseries} />
    </Container>
  );
}
