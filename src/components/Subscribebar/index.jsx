import { Container } from './styles';

import Button from '../Buttondefault';

export default function Subscribebar() {
  return (
    <Container>
      <div className="content">
        <p>R$ 39,90/mês no plano anual</p>
        <Button text="Assine agora" />
      </div>
    </Container>
  );
}
