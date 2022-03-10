import axios from 'axios';

export const getPopularMovies = async ({ pageParam = 1 }) => {
  return await axios.get(`/movie/popular?page=${pageParam}`).then(({ data }) => data);
};
