import React, { FC } from 'react';
import { TLink } from '..';
import { Link } from '..';
import { linkMainPrimary, linkMainSecondary } from './variants/link-main';

export interface LinkMainProps {
  text: string
  id?: string
  href: string
  isDisabled?: boolean
  target: '_blank' | '_self'
  variant: 'primary' | 'secondary'
}

export const LinkMain: FC<LinkMainProps> = ({
  text,
  target,
  href,
  isDisabled,
  variant,
  id,
}) => {

  const traits: TLink['traits'] = {
    text,
    isDisabled,
    attributes: {
      id,
      href,
      target
    },
    styles: variant === 'primary' ? linkMainPrimary : linkMainSecondary,
  }

  return <Link traits={traits} />

};
