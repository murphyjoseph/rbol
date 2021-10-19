import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinkMain, LinkMainProps } from '../examples/link-main';

export default {
  title: 'Demo/LinkMain',
  component: LinkMain,
} as Meta;

const Template: Story<LinkMainProps> = (args) => <LinkMain {...args} />;

const argsDefault: LinkMainProps = {
  text: 'Example Heading',
  href: 'www.google.com',
  target: '_blank',
  id: 'Link Element',
  variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  ...argsDefault,
  text: 'Link Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...argsDefault,
  text: 'Link Secondary',
  variant: 'secondary',
};
