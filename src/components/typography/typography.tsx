import React, { FC } from 'react';
import { style } from 'typestyle';
import { mixinStyles } from '../../shared/mixins/styles';
import { mixinTypography } from '../../shared/mixins/typography';
import { TTypography } from './typography.typings';

export const Typography: FC<TTypography> = ({ traits }) => {

  const {
    tag,
    text,
    attributes,
    styles
  } = traits;

  let Tag = tag;

  const internalStyles = style({
    ...styles && mixinStyles(styles),
    ...styles && mixinTypography(styles),
    ...styles?.injectCSS
  });

  // const internalStyles = style({
  //   ...styles?.injectCSS
  // });

  return (
    <Tag
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabindex}
    > 
      { text } 
    </Tag>
  )

}