import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

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
});
