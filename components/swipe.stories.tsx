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
  title: 'The Matrix Reloaded',
  picture: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
  categories: ['Action', 'Sci-Fi'],
  description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
},
{
  title: 'The Matrix Revolutions',
  picture: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
  categories: ['Action', 'Sci-Fi'],
  description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
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
  children: movies.map(movie => <MovieOverview key={movie.title} {...movie} />),
};