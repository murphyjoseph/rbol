import React, { FC } from 'react';
import { style } from 'typestyle';
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
    ...styles?.colorBackground && { background: styles.colorBackground },
    ...styles?.colorText && { color: styles.colorText },
    ...styles?.textTransform && { textTransform: styles.textTransform },
    ...styles?.textAlign && { textAlign: styles.textAlign },
    ...styles?.whiteSpace && { whiteSpace: styles.whiteSpace },
    ...styles?.display && { display: styles.display }
  });

  return (
    <Tag
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabIndex}
    > 
      { text } 
    </Tag>
  )

}