import { render } from '@testing-library/react';
import { mock_movies } from '../__Mocks__';
import { MovieOverview } from '../movie-overview/movie-overview';
import { Swipe } from './swipe';


it('renders Lyout unchanged', () => {
  const { container } = render(
    <Swipe>
      {mock_movies.map((movie) => (
        <MovieOverview key={movie.title} {...movie} />
      ))}
    </Swipe>
  );
  expect(container).toMatchSnapshot();
});
