import React, { FC } from 'react';
import { style } from 'typestyle';
import { mixinLabel } from './label.mixin';
import { TLabel } from './label.typings';

export const Label: FC<TLabel> = ({ traits }) => {

  const {
    text,
    attributes,
    styles
  } = traits;

  const internalStyles = style({
    ...styles && {
      ...styles.base && mixinLabel(styles.base),
      $nest: {
        ...!!styles.hover && { '&:hover': mixinLabel(styles.hover) },
        ...!!styles.focus && { '&&:focus': mixinLabel(styles.focus) },
        ...!!styles.dirty && { '&&&:data-dirty': mixinLabel(styles.dirty) },
        ...!!styles.checked && { '&&&&:data-checked': mixinLabel(styles.checked) },
        ...!!styles.valid && { '&&&&&:data-valid': mixinLabel(styles.valid) },
        ...!!styles.invalid && { '&&&&&&:data-invalid': mixinLabel(styles.invalid) },
        ...!!styles.disabled && { '&&&&&&&&:data-disabled': mixinLabel(styles.disabled) },
      },
    }
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