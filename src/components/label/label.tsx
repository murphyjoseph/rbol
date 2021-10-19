import React, { FC } from 'react';
import { style } from 'typestyle';
import { mixinTypography } from '../..';
import { mixinStyles } from '../../shared/mixins/styles';
import { TLabel } from './label.typings';

export const Label: FC<TLabel> = ({ traits }) => {

  const {
    text,
    attributes,
    styles
  } = traits;

  const internalStyles = style({
    ...styles && mixinStyles(styles),
    ...styles && mixinTypography(styles),
    ...styles?.injectCSS
  });

  return (
    <label
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabindex}
      htmlFor={attributes?.for}
    > 
      { text } 
    </label>
  )

}