import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ContainerMain, ContainerMainProps } from '../examples/container';

export default {
  title: 'Demo/ContainerMain',
  component: ContainerMain,
} as Meta;

const Template: Story<ContainerMainProps> = (args) => <ContainerMain {...args} />;

const argsDefault: ContainerMainProps = {
  id: 'Container Element',
  background: 'grey',
  paddingSize: 'eight',
  tag: 'section'
};

export const Primary = Template.bind({});
Primary.args = argsDefault;
