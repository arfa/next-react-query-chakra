import Head from 'next/head';

import { getPopularMovies } from 'services/movies';
import { getMoviesGenres } from 'services/genres';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { MoviesLayout } from '@/components/movies-layout';
import { MovieOverview } from '@/components/movie-overview';
import Swipe from '@/components/swipe';
import { Heading } from '@chakra-ui/react';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['popularMovies'], () => getPopularMovies());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data, isError, isLoading } = useQuery(['popularMovies'], () => getPopularMovies());
  const { data: genres } = useQuery(['popularMovies'], () => getMoviesGenres());

  return (
    <>
      <Head>
        <title>Popular Movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Heading as='h3' size='lg' my={4}>
        TOP 10 Movies
      </Heading>
      <Swipe>
        {data?.results?.slice(10).map((movie: any) => (
          <MovieOverview
            width='100%'
            key={movie.id}
            categories={movie.genre_ids}
            picture={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </Swipe>
      <Heading as='h3' size='lg' mt={8} mb={4}>
        Popular Movies
      </Heading>
      <MoviesLayout>
        {data?.results?.slice(10, 40).map((movie: any) => (
          <MovieOverview
            key={movie.id}
            categories={movie.genre_ids}
            description={movie.overview}
            picture={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </MoviesLayout>
    </>
  );
}
