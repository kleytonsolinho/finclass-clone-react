import { Container } from './styles';

import Header from '../../components/DashboardComponents/Header';
import Banner from '../../components/DashboardComponents/Banner';
import Finclasses from '../../components/DashboardComponents/Finclasses';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Banner />
      <Finclasses />
    </Container>
  );
}
