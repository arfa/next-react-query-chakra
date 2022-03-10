import { render } from '@testing-library/react';
import { mock_movie } from '../__Mocks__';
import { MovieOverview } from './movie-overview';

it('renders Lyout unchanged', () => {
  const { container } = render(
    <MovieOverview
      picture={mock_movie.title}
      title={mock_movie.title}
      description={mock_movie.description}
      categories={mock_movie.categories}
    />
  );
  expect(container).toMatchSnapshot();
});
