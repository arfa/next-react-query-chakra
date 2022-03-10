import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MoviesLayout } from './movies-layout';
import { MovieOverview } from '../movie-overview/movie-overview';
import { mock_movies } from '../__Mocks__';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MoviesLayout',
  component: MoviesLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MoviesLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoviesLayout> = (args) => <MoviesLayout {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: mock_movies.map(movie => <MovieOverview key={movie.title} {...movie} />),
};