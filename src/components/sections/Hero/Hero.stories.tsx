import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero, { IHero } from './Hero';
import { mockHeroProps } from './Hero.mocks';

export default {
  title: 'Heros/Hero',
  component: Hero,
  argTypes: {},
} as ComponentMeta<typeof Hero>;

const HeroStory: ComponentStory<typeof Hero> = args => <Hero {...args} />;

export const Base = HeroStory.bind({});

Base.args = {
  ...mockHeroProps.base,
} as IHero;
