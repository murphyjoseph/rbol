import React, { FC } from 'react';
import { TLink } from '..';
import { Link } from '..';

export interface LinkPrimaryProps {
  text: string;
  id?: string;
  href: string;
  target: '_blank';
}

export const LinkPrimary: FC<LinkPrimaryProps> = ({
  text,
  target,
  href,
  id,
}) => {

  const traits: TLink['traits'] = {
    text,
    attributes: {
      id,
      href,
      target
    },
    styles: {
      base: {
        colorText: 'blue',
        textDecoration: 'underline'
      },
      hover: {
        colorText: 'green',
        textDecoration: 'none'
      }
    }
  }

  return <Link traits={traits} />

}