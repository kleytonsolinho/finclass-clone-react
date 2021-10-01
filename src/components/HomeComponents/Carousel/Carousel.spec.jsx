import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';

import Carousel from '.';

describe('Carousel component', () => {
  it('renders correctly header', () => {
    render(<Carousel />);

    const Image = document.querySelectorAll('img');
    expect(Image[0].src).toContain('mastermind.svg');
  });

  it('renders correctly texts header', () => {
    render(<Carousel />);

    expect(screen.getByText('Conheça')).toBeInTheDocument();
    expect(screen.getByText('os seus mentores')).toBeInTheDocument();
    expect(screen.getByText('Os professores da Finclass são os maiores especialistas do mercado financeiro mundial.')).toBeInTheDocument();
  });

  it('renders correctly controls', () => {
    render(<Carousel />);

    const Image = document.querySelectorAll('img');
    expect(Image[1].src).toContain('icon-arrow-circle-down.svg');
    expect(Image[1].alt).toContain('Left');
    expect(Image[2].src).toContain('icon-arrow-circle-down.svg');
    expect(Image[2].alt).toContain('Right');
  });

  it('renders correctly cards', () => {
    render(<Carousel />);

    const card = document.querySelectorAll('.card');

    expect(card).toHaveLength(10);
  });
});
