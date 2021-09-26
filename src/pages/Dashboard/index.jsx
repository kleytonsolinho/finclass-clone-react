import { Container } from './styles';

import Header from '../../components/DashboardComponents/Header';
import Banner from '../../components/DashboardComponents/Banner';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
}
