import axios from 'axios';

export const getPopularMovies = async (page = 1) => {
  return await axios.get(`/movie/popular?page=${page}`).then(({ data }) => data);
};
