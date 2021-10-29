import imgTrail from '../../../assets/images/site/icon-trilha.f1961c83.svg';
import imgIcon from '../../../assets/images/site/arrow-right.0da26cf8.svg';

import {
  Container,
  Title,
  Content,
  BoxContainer,
  Header,
  Description,
  HeaderTitle,
  HeaderWatch,
} from './styles';

export default function Trail() {
  return (
    <Container>
      <Title>Trilhas de conhecimento</Title>
      <Content>
        <BoxContainer>
          <Header>
            <HeaderTitle>
              <img src={imgTrail} alt="" />
              <p>Iniciante</p>
            </HeaderTitle>
            <HeaderWatch className="btn">
              <span>assistir</span>
              <img src={imgIcon} alt="" />
            </HeaderWatch>
          </Header>
          <Description>
            Comece no mundo dos investimentos e aprenda os fundamentos do
            mercado com temas abrangentes.
          </Description>
        </BoxContainer>
        <BoxContainer>
          <Header>
            <HeaderTitle>
              <img src={imgTrail} alt="" />
              <p>Intermediário</p>
            </HeaderTitle>
            <HeaderWatch className="btn">
              <span>assistir</span>
              <img src={imgIcon} alt="" />
            </HeaderWatch>
          </Header>
          <Description>
            Siga essa trilha para conhecer novas possibilidades através de
            temas sobre investimentos.
          </Description>
        </BoxContainer>
        <BoxContainer>
          <Header>
            <HeaderTitle>
              <img src={imgTrail} alt="" />
              <p>Avançado</p>
            </HeaderTitle>
            <HeaderWatch className="btn">
              <span>assistir</span>
              <img src={imgIcon} alt="" />
            </HeaderWatch>
          </Header>
          <Description>
            Descubra uma seleção de conteúdos com temas mais específicos
            sobre o mercado financeiro.
          </Description>
        </BoxContainer>
      </Content>
    </Container>
  );
}
