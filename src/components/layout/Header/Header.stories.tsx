import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header, { IHeader } from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'components/layout/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const HeaderStory: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Base = HeaderStory.bind({});

Base.args = {
  ...mockHeaderProps.base,
} as IHeader;
