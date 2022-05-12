import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer, { IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'Footers/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const FooterStory: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Base = FooterStory.bind({});

Base.args = {
  ...mockFooterProps.base,
} as IFooter;
