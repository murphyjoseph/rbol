import React, { FC } from 'react';
import { style } from 'typestyle';
import { mixinContainer } from './container.mixin';
import { TContainer } from './container.typings';

export const Container: FC<TContainer> = ({ traits, children }) => {

  const {
    tag,
    attributes,
    styles,
  } = traits;

  const Tag = tag;

  const internalStyles = style({
    ...styles && mixinContainer(styles),
  });

  return (
    <Tag
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabindex}
    >
      { children }
    </Tag>
  );

};
