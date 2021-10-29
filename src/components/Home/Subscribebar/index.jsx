import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import Button from '../../Global/Form/Button';

export default function Subscribebar() {
  const history = useHistory();

  function handleToRegister() {
    history.push('/register');
  }
  return (
    <Container>
      <div className="content">
        <p>R$ 39,90/mês no plano anual</p>
        <Button
          width={20}
          primary
          color="#00e7f9"
          type="submit"
          onClick={() => handleToRegister()}
        >
          Assine agora
        </Button>
      </div>
    </Container>
  );
}
