import { ComponentMeta, ComponentStory } from '@storybook/react';
import Newsletter, { INewsletter } from './Newsletter';
import { mockNewsletterProps } from './Newsletter.mocks';

export default {
  title: 'sections/Newsletter',
  component: Newsletter,
  argTypes: {},
} as ComponentMeta<typeof Newsletter>;

const NewsletterStory: ComponentStory<typeof Newsletter> = args => <Newsletter {...args} />;

export const Base = NewsletterStory.bind({});

Base.args = {
  ...mockNewsletterProps.base,
} as INewsletter;
