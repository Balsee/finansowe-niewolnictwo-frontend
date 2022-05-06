import { ComponentMeta, ComponentStory } from '@storybook/react';
import Template, { ITemplate } from './Template';
import { mockTemplateProps } from './Template.mocks';

export default {
  title: 'templates/template',
  component: Template,
  argTypes: {},
} as ComponentMeta<typeof Template>;

const TemplateStory: ComponentStory<typeof Template> = args => <Template {...args} />;

export const Base = TemplateStory.bind({});

Base.args = {
  ...mockTemplateProps.base,
} as ITemplate;
