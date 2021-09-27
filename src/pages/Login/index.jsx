import { Link } from 'react-router-dom';

import { Container, ButtonPrimary, ButtonOutline } from './styles';

import imgLogo from '../../assets/images/site/logo-finclass.svg';
import imgRecpass from '../../assets/images/site/clock.4c1870d0.svg';

export default function Login() {
  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo finclass" />
        <h2>Acesse a maior plataforma de</h2>
        <h1>
          Educação financeira
          {' '}
          <br />
          {' '}
          do mundo!
        </h1>
        <form onSubmit="" autoComplete="off">
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
          <Link to="/dashboard">
            <ButtonPrimary type="submit">Entrar</ButtonPrimary>
          </Link>
        </form>
        <h5><span>Ainda não tem uma conta?</span></h5>
        <ButtonOutline> Criar conta</ButtonOutline>
      </div>
    </Container>
  );
}
