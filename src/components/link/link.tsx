import React, { FC } from 'react';
import { style } from 'typestyle';
import { Typography } from '../typography/typography';
import { TLink } from './link.typings';

export const Link: FC<TLink> = ({ traits }) => {

  const {
    attributes,
    styles,
    traitTypography,
    // isDisabled,
    
  } = traits;

  const internalStyles = style({
    ...styles?.colorBackground && { background: styles.colorBackground },
    // ...styles?.colorText && { color: styles.colorText },
    ...styles?.textTransform && { textTransform: styles.textTransform },
    ...styles?.textAlign && { textAlign: styles.textAlign },
    ...styles?.whiteSpace && { whiteSpace: styles.whiteSpace },
    ...styles?.display && { display: styles.display },
    ...styles?.injectCSS && { ...styles.injectCSS }
  });

  // const attrLoading = { 'data-loading': true };

  return (
    <a
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabindex}
      href={attributes?.href}
      target={attributes?.target}
      // {...isLoading && attrLoading}
    > 
      <Typography traits={traitTypography} />
    </a>
  )

}