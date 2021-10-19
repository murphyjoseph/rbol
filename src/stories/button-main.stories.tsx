import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonMain, ButtonMainProps } from '../examples/button-main';

export default {
  title: 'Demo/ButtonMain',
  component: ButtonMain,
} as Meta;

const Template: Story<ButtonMainProps> = (args) => <ButtonMain {...args} />;

const argsDefault: ButtonMainProps = {
  text: 'button',
  onClick: () => console.log('hit'),
  isDisabled: false,
  variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  ...argsDefault,
  text: 'Button Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...argsDefault,
  text: 'Button Secondary',
  variant: 'secondary',
};