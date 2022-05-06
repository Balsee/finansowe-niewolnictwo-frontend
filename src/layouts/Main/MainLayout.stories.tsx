import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainLayout, { IMainLayout } from './MainLayout';
import { mockMainLayoutProps } from './MainLayout.mocks';

export default {
  title: 'MainLayouts/MainLayout',
  component: MainLayout,
  argTypes: {},
} as ComponentMeta<typeof MainLayout>;

const MainLayoutStory: ComponentStory<typeof MainLayout> = args => <MainLayout {...args} />;

export const Base = MainLayoutStory.bind({});

Base.args = {
  ...mockMainLayoutProps.base,
} as IMainLayout;
