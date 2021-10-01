import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';

import Subscribebar from '.';

describe('Subscribebar component', () => {
  it('renders correctly button', () => {
    render(<Subscribebar />);

    expect(screen.getByText('Assine agora')).toBeInTheDocument();
  });

  it('renders correctly texts Subscribebar', () => {
    render(<Subscribebar />);

    expect(screen.getByText('R$ 39,90/mês no plano anual')).toBeInTheDocument();
  });
});
