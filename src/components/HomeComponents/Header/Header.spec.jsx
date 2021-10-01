import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

jest.mock('../../../context/NavbarScroll', () => ({
  useNavbarScoll() {
    return [false, null];
  },
}));

describe('Header component', () => {
  it('renders correctly image logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const Image = document.querySelector('img');
    expect(Image.src).toContain('logo-finclass.svg');
    expect(Image.alt).toContain('Logo finclass');
  });

  it('renders correctly menu register', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText('Assine agora')).toBeInTheDocument();
  });

  it('redirects to register on click menu', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText('Assine agora')).toHaveAttribute('href', '/register');
  });

  it('renders correctly menu login', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText('Já sou assinante')).toBeInTheDocument();
  });

  it('redirects to login on click menu', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText('Já sou assinante')).toHaveAttribute('href', '/login');
  });
});
