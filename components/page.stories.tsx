import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MoviesLayout } from './movies-layout/movies-layout';
import { MovieOverview } from './movie-overview/movie-overview';
import { AppLayout } from './app-layout/app-layout';
import { mock_movies } from './__Mocks__';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AppLayout',
  component: AppLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLayout> = (args) => (
  <AppLayout>
    <MoviesLayout {...args}>
      {mock_movies.map((movie) => (
        <MovieOverview key={movie.title} {...movie} />
      ))}
    </MoviesLayout>
  </AppLayout>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
