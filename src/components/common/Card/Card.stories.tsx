import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card, { ICard } from './Card';
import { mockCardProps } from './Card.mocks';

export default {
  title: 'Cards/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const CardStory: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Base = CardStory.bind({});

Base.args = {
  ...mockCardProps.base,
} as ICard;
