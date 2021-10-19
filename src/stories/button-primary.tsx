import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonPrimary, ButtonPrimaryProps } from '../examples/button-primary';

export default {
  title: 'Demo/ButtonPrimary',
  component: ButtonPrimary,
} as Meta;

const Template: Story<ButtonPrimaryProps> = (args) => <ButtonPrimary {...args} />;

const argsDefault: ButtonPrimaryProps = {
  text: 'Example Heading',
  onClick: () => console.log('hit'),
  id: 'Link Element',
};

export const Primary = Template.bind({});
Primary.args = argsDefault;
