import { Container } from './styles';

import Button from '../../Global/Buttondefault';

export default function Subscribebar() {
  return (
    <Container>
      <div className="content">
        <p>R$ 39,90/mês no plano anual</p>
        <Button
          width={20}
          primary
          color="#00e7f9"
          type="submit"
        >
          Assine agora
        </Button>
      </div>
    </Container>
  );
}
