import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Typography } from '../components/typography/typography';
import { TTypography } from '../components/typography/typography.typings';

export default {
  title: 'Text/Typography',
  component: Typography,
} as Meta;

const Template: Story<TTypography> = (args) => <Typography {...args} />;

const argsDefault: TTypography = {
  traits: {
    text: 'Example Text Element',
    tag: 'h1',
    attributes: {
      id: 'Title Element',
    },
    styles: {
      display: 'block',
      colorText: 'white',
      colorBackground: 'black'
    }
  }
};

export const Primary = Template.bind({});
Primary.args = { ...argsDefault };
