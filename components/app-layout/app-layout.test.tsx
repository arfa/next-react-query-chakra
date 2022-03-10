import { render, screen } from '@testing-library/react';
import { AppLayout } from './app-layout';

describe('App Layout', () => {
  it('renders Layout', () => {
    render(
      <AppLayout>
        <h1>Hello World !</h1>
      </AppLayout>
    );

    const heading = screen.getByRole('heading', {
      name: /Hello World !/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

it('renders Lyout unchanged', () => {
  const { container } = render(
    <AppLayout>
      <h1>Hello World !</h1>
    </AppLayout>
  );
  expect(container).toMatchSnapshot();
});
