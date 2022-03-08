import Swipe from './swipe'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MovieOverview } from './movie-overview';

const movies = [
  {
  title: 'The Matrix',
  picture: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
  categories: ['Action', 'Sci-Fi'],
  description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
},
{
  title: 'Inception',
  picture: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
  categories: ['Action', 'Sci-Fi'],
  description: 'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
},
{
  title: 'Avatar',
  picture: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  categories: ['Action', 'Adventure', 'Fantasy'],
  description: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
},
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/Swipe',
  component: Swipe,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Swipe>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Swipe> = (args) => (

  <Swipe {...args}/>

)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: movies.map(movie => <MovieOverview key={movie.title} {...movie} width="100%" />),
};
