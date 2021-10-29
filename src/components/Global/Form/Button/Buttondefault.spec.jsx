import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Buttondefault from '.';

describe('Buttondefault component', () => {
  it('renders correctly button primary', () => {
    render(
      <Buttondefault
        width={50}
        primary
        color="#00e7f9"
        type="submit"
      >
        Teste
      </Buttondefault>,
    );

    expect(screen.getByText('Teste')).toBeInTheDocument();
  });

  it('execute function correctly button primary onclick', () => {
    const handleClick = jest.fn();
    render(
      <Buttondefault
        width={50}
        primary
        color="#00e7f9"
        type="submit"
        onClick={handleClick}
      >
        Teste
      </Buttondefault>,
    );

    fireEvent.click(screen.getByText('Teste'));

    expect(handleClick).toHaveBeenCalled();
  });
});
