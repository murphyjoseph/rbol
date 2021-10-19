import React, { FC } from 'react';
import { style } from 'typestyle';
import { mixinButton } from './button.mixin';
import { TButton } from './button.typings';

export const Button: FC<TButton> = ({ traits }) => {

  const {
    attributes,
    styles,
    isDisabled,
    isLoading,
    isSelected,
    text,
  } = traits;

  const internalStyles = style({
    ...styles && {
      ...styles.base && mixinButton(styles.base),
      $nest: {
        ...!!styles.hover && { '&:hover': mixinButton(styles.hover) },
        ...!!styles.focus && { '&&:focus': mixinButton(styles.focus) },
        ...!!styles.selected && { '&&&[data-selected]': mixinButton(styles.selected) },
        ...!!styles.loading && { '&&&&[data-loading]': mixinButton(styles.loading) },
        ...!!styles.disabled && { '&&&&&[data-disabled]': mixinButton(styles.disabled) },
      },
    },
  });

  const attrDisabled = { 'data-disabled': true };
  const attrLoading = { 'data-loading': true };
  const attrSelected = { 'data-selected': true };

  return (
    <button
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabindex}
      onClick={attributes?.onClick}
      type="button"
      disabled={isDisabled}
      {...isDisabled && attrDisabled}
      {...isLoading && attrLoading}
      {...isSelected && attrSelected}
    >
      { text }
    </button>
  );

};
