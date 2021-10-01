import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';

import Banner from '.';

describe('Banner component', () => {
  it('renders correctly image icon 1', () => {
    render(<Banner />);

    const Image = document.querySelectorAll('img')[0];
    expect(Image.src).toContain('thunder-lightning-circle.svg');
    expect(Image.alt).toContain('icon');
  });

  it('renders correctly image icon 2', () => {
    render(<Banner />);

    const Image = document.querySelectorAll('img')[1];
    expect(Image.src).toContain('icon-arrow-circle-down.svg');
    expect(Image.alt).toContain('icon');
  });

  it('renders correctly image banner app', () => {
    render(<Banner />);

    const Image = document.querySelectorAll('img')[2];
    expect(Image.src).toContain('app-finclass.webp');
    expect(Image.alt).toContain('app finclass');
  });

  it('renders correctly texts banner', () => {
    render(<Banner />);

    expect(screen.getByText('Conhecimento como um ativo')).toBeInTheDocument();
    expect(screen.getByText('Assine a partir de')).toBeInTheDocument();
    expect(screen.getByText('R$ 39,90/mês no plano anual.')).toBeInTheDocument();
    expect(screen.getByText('Descubra como')).toBeInTheDocument();
    expect(screen.getByText(/Aprenda a investir do/i)).toBeInTheDocument();
    expect(screen.getByText(/zero com os melhores/i)).toBeInTheDocument();
    expect(screen.getByText(/Conquiste sua liberdade financeira e entre para o mundo dos/i)).toBeInTheDocument();
    expect(screen.getByText(/investimentos com os maiores especialistas do mercado./i)).toBeInTheDocument();
  });

  it('renders correctly button banner', () => {
    render(<Banner />);

    expect(screen.getByText('Assine agora')).toBeInTheDocument();
  });
});
