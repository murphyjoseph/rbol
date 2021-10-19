import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinkPrimary, LinkPrimaryProps } from '../examples/link-primary';

export default {
  title: 'Demo/LinkPrimary',
  component: LinkPrimary,
} as Meta;

const Template: Story<LinkPrimaryProps> = (args) => <LinkPrimary {...args} />;

const argsDefault: LinkPrimaryProps = {
  text: 'Example Heading',
  href: 'www.google.com',
  target: '_blank',
  id: 'Link Element',
};

export const Primary = Template.bind({});
Primary.args = argsDefault;
