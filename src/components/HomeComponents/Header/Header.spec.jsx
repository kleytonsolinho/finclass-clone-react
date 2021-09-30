import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

jest.mock('../../../context/NavbarScroll', () => ({
  useNavbarScoll() {
    return [false, false];
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

  it('renders correctly menu login', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText('Já sou assinante')).toBeInTheDocument();
  });
});
