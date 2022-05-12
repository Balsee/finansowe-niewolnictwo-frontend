import { ComponentMeta, ComponentStory } from '@storybook/react';
import Posts, { IPosts } from './Posts';
import { mockPostsProps } from './Posts.mocks';

export default {
  title: 'Postss/Posts',
  component: Posts,
  argTypes: {},
} as ComponentMeta<typeof Posts>;

const PostsStory: ComponentStory<typeof Posts> = args => <Posts {...args} />;

export const Base = PostsStory.bind({});

Base.args = {
  ...mockPostsProps.base,
} as IPosts;
