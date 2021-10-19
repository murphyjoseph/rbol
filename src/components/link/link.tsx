import React, { FC } from 'react';
import { style } from 'typestyle';
import { mixinLink } from './link.mixin';
import { TLink } from './link.typings';

export const Link: FC<TLink> = ({ traits }) => {

  const {
    attributes,
    styles,
    isDisabled,
    text
  } = traits;

  const internalStyles = style({
    ...styles && {
      ...styles.base && mixinLink(styles.base),
      $nest: {
        ...!!styles.visited && { '&:visited': mixinLink(styles.visited) },
        ...!!styles.hover && { '&&:hover': mixinLink(styles.hover) },
        ...!!styles.focus && { '&&&:focus': mixinLink(styles.base) },
        ...!!styles.disabled && { '&&&&:data-disabled': mixinLink(styles.disabled) },
      },
    }
  });

  const attrDisabled = { 'data-disabled': true };

  return (
    <a
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabindex}
      href={attributes?.href}
      target={attributes?.target}
      {...isDisabled && attrDisabled}
    > 
      { text }
    </a>
  )

}