import { useHistory } from 'react-router-dom';

import Button from '../../components/Global/Buttondefault';

import { Container } from './styles';

import imgLogo from '../../assets/images/site/logo-finclass.svg';
import imgRecpass from '../../assets/images/site/clock.4c1870d0.svg';

export default function Login() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    history.push('/dashboard');
  }

  function handleRegister() {
    history.push('/register');
  }
  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo finclass" />
        <h2>Acesse a maior plataforma de</h2>
        <h1>
          Educação financeira
          <br />
          do mundo!
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            E-mail
            <input name="email" type="email" placeholder="Insira seu e-mail" />
          </label>
          <label>
            Senha
            <input name="password" type="password" placeholder="Insira sua senha" />
          </label>
          <a href="/">
            <div className="recpassword">
              Recuperar senha
              <img src={imgRecpass} alt="Recuperar senha" />
            </div>
          </a>
          <Button
            width={100}
            primary
            color="#00e7f9"
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <h5><span>Ainda não tem uma conta?</span></h5>
        <Button
          width={100}
          color="#00e7f9"
          type="submit"
          onClick={() => handleRegister()}
        >
          Criar Conta
        </Button>
      </div>
    </Container>
  );
}
