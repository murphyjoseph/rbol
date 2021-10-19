import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonMain, ButtonMainProps } from '../examples/button-main';

export default {
  title: 'Demo/ButtonMain',
  component: ButtonMain,
} as Meta;

const Template: Story<ButtonMainProps> = (args) => <ButtonMain {...args} />;

const argsDefault: ButtonMainProps = {
  text: 'Example Button',
  onClick: () => console.log('hit'),
  id: 'Button Element',
  variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = argsDefault;

export const Secondary = Template.bind({
  ...argsDefault,
  variant: 'secondary',
});
