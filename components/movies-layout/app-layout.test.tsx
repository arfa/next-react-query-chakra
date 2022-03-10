import { render } from '@testing-library/react';
import { mock_movies } from '../__Mocks__';
import { MovieOverview } from '../movie-overview/movie-overview';
import { MoviesLayout } from './movies-layout';


it('renders Lyout unchanged', () => {
  const { container } = render(
    <MoviesLayout>
      {mock_movies.map((movie) => (
        <MovieOverview key={movie.title} {...movie} />
      ))}
    </MoviesLayout>
  );
  expect(container).toMatchSnapshot();
});
