import { Link, useHistory } from 'react-router-dom';

import {
  Container, Header, Content, Box, Policy,
} from './styles';

import Button from '../../components/Global/Form/Button';

import imgLogo from '../../assets/images/site/logo-finclass.svg';

export default function Register() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    history.push('/dashboard');
  }

  return (
    <Container>
      <Header>
        <Link to="/"><img src={imgLogo} alt="Logo finclass" /></Link>
        <Link to="/login"><button type="button">Entrar</button></Link>
      </Header>
      <Content>
        <Box>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <span>
              PASSO:
              <strong>1</strong>
              2
            </span>
            <h1>Criar conta</h1>
            <p>
              Preencha os campos abaixo para continuarmos
              <br />
              avançando com o seu cadastro
            </p>
            <label>
              Nome
              <input name="name" type="text" placeholder="Digite seu nome" />
            </label>
            <label>
              Sobrenome
              <input name="lastname" type="text" placeholder="Digite seu sobrenome" />
            </label>
            <label>
              E-mail
              <input name="email" type="email" placeholder="Insira seu e-mail" />
            </label>
            <label>
              Celular
              <input name="phone" type="text" placeholder="(11) 9 9999-9999" />
            </label>
            <Button
              width={100}
              primary
              color="#00e7f9"
              type="submit"
            >
              Continuar
            </Button>
          </form>
        </Box>
        <Policy>
          <p>
            * Em caso de problemas, entre em contato com o suporte através do
            email
            <a href="/register">suporte@finclass.com</a>
            .
          </p>
          <p>
            Ao ”clicar” no botão continuar, você aceita nosso
            <a href="/register">termos de uso</a>
            e
            <a href="/register"> política de privacidade</a>
            .
          </p>
        </Policy>
      </Content>
    </Container>
  );
}
