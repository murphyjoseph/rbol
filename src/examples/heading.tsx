import React, { FC } from 'react';
import { Typography } from '../components/typography/typography';
import { TTypography } from '../components/typography/typography.typings';

export interface HeadingProps {
  text: string;
  tag: 'h1' | 'h2' | 'h3';
  color: 'black' | 'white';
  background: 'black' | 'white';
  id?: string;
}

export const Heading: FC<HeadingProps> = ({
  text,
  tag,
  color,
  background,
  id,
}) => {

  const traits: TTypography['traits'] = {
    text,
    tag,
    attributes: {
      id,
    },
    styles: {
      colorText: color,
      colorBackground: background,
      padding: {size: 'one', direction: 'all' }
    }
  }

  return <Typography traits={traits} />

}