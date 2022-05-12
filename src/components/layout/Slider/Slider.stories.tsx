import { ComponentMeta, ComponentStory } from '@storybook/react';
import Slider, { ISlider } from './Slider';
import { mockSliderProps } from './Slider.mocks';

export default {
  title: 'Sliders/Slider',
  component: Slider,
  argTypes: {},
} as ComponentMeta<typeof Slider>;

const SliderStory: ComponentStory<typeof Slider> = args => <Slider {...args} />;

export const Base = SliderStory.bind({});

Base.args = {
  ...mockSliderProps.base,
} as ISlider;
