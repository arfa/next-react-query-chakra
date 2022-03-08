import Head from 'next/head';

import { getPopularMovies } from 'services/movies';
import { getMoviesGenres } from 'services/genres';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { MoviesLayout } from '@/components/movies-layout';
import { MovieOverview } from '@/components/movie-overview';
import Swipe from '@/components/swipe';
import { Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';

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
  const [page, setPage] = React.useState(1);

  const {
    data: movies,
    isError,
    isLoading,
  } = useQuery(['popularMovies', page], () => getPopularMovies(page), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setPage(2);
  }, []);

  const { data: genres } = useQuery(['genresMovies'], () => getMoviesGenres());

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <title>Popular Movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Swipe>
        {movies?.results?.slice(10).map((movie: any) => (
          <MovieOverview
            margin='auto'
            width={{ sm: '350px', md: 'auto' }}
            height='100%'
            key={movie.title}
            categories={movie.genre_ids?.map((id: number) => genres?.find((genre: any) => genre.id === id)?.name)}
            picture={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </Swipe>
      <Heading as='h3' size='lg' mt={8} mb={4}>
        Popular Movies
      </Heading>
      <MoviesLayout>
        {movies?.results?.slice(10, 40).map((movie: any) => (
          <MovieOverview
            key={movie.id}
            categories={movie.genre_ids?.map((id: number) => genres?.find((genre: any) => genre.id === id)?.name)}
            description={movie.overview}
            picture={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </MoviesLayout>
    </>
  );
}
