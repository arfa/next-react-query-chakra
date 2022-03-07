module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chakra-ui/storybook-addon'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
