import Head from 'next/head';

import { getPopularMovies } from 'services/movies';
import { getMoviesGenres } from 'services/genres';
import { dehydrate, QueryClient, useInfiniteQuery, useQuery } from 'react-query';
import { MoviesLayout } from '@/components/movies-layout/movies-layout';
import { MovieOverview } from '@/components/movie-overview/movie-overview';
import { Swipe } from '@/components/swipe/swipe';
import { Heading } from '@chakra-ui/react';
import React from 'react';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(['popularMovies', 1], () => getPopularMovies({ pageParam: 1 }));
  await queryClient.prefetchInfiniteQuery(['popularMovies', 2], () => getPopularMovies({ pageParam: 2 }));

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default function Home() {
  const {
    data: movies1,
    isError: isError1,
    isLoading: isLoading1,
  } = useInfiniteQuery(['popularMovies', 1], () => getPopularMovies({ pageParam: 1 }));

  const {
    data: movies2,
    isError: isError2,
    isLoading: isLoading2,
  } = useInfiniteQuery(['popularMovies', 2], () => getPopularMovies({ pageParam: 2 }));

  const mainMovies = [...(movies1?.pages?.[0]?.results ?? []), ...(movies2?.pages?.[0]?.results ?? [])];

  const { data: genres } = useQuery(['genresMovies'], () => getMoviesGenres());

  if (isError1 || isError2) {
    return <div>Error</div>;
  }

  if (isLoading1 || isLoading2) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <title>Popular Movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Swipe>
        {!!movies1?.pages[0] &&
          movies1?.pages?.[0].results
            ?.slice(10)
            .map((movie: any) => (
              <MovieOverview
                margin='auto'
                width={{ sm: '350px', md: 'auto' }}
                height='100%'
                key={movie.title}
                categories={movie.genre_ids?.map((id: number) => genres?.find((genre: any) => genre.id === id)?.name)}
                picture={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                title={movie.title}
              />
            ))}
      </Swipe>
      <Heading as='h3' size='lg' mt={8} mb={4}>
        Popular Movies
      </Heading>
      <MoviesLayout>
        {mainMovies.slice(10, 40).map((movie: any) => (
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
