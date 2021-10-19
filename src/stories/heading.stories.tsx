import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '../examples/heading';

export default {
  title: 'Demo/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

const argsDefault: HeadingProps = {
  text: 'Example Heading',
  tag: 'h1',
  id: 'Title Element',
  color: 'white',
  background: 'black'
};

export const Primary = Template.bind({});
Primary.args = argsDefault;
