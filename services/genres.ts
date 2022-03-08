import axios from 'axios';

export const getMoviesGenres = async () => {
  return await axios.get(`/genre/movie/list`).then(({ data }) => data);
};
