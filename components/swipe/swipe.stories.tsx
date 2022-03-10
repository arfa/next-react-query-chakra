import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Swipe } from './swipe';
import { MovieOverview } from '../movie-overview/movie-overview';
import { mock_movies } from '../__Mocks__';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/Swipe',
  component: Swipe,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Swipe>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Swipe> = (args) => <Swipe {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: mock_movies.map((movie) => <MovieOverview key={movie.title} {...movie} width='100%' />),
};
