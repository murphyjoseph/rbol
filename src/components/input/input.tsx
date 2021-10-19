import React, { FC } from 'react';
import { style } from 'typestyle';
import { mixinInput } from './input.mixin';
import { TInput } from './input.typings';

export const Input: FC<TInput> = ({ traits }) => {

  const {
    attributes,
    styles,
    isInvalid,
    isRequired,
    isDisabled,
    isChecked,
    isValid,
    isDirty,
  } = traits;

  const internalStyles = style({
    ...styles && {
      ...styles.base && mixinInput(styles.base),
      $nest: {
        ...!!styles.hover && { '&:hover': mixinInput(styles.hover) },
        ...!!styles.focus && { '&&:focus': mixinInput(styles.focus) },
        ...!!styles.dirty && { '&&&[data-dirty]': mixinInput(styles.dirty) },
        ...!!styles.checked && { '&&&&[data-checked]': mixinInput(styles.checked) },
        ...!!styles.valid && { '&&&&&[data-valid]': mixinInput(styles.valid) },
        ...!!styles.invalid && { '&&&&&&[data-invalid]': mixinInput(styles.invalid) },
        ...!!styles.disabled && { '&&&&&&&&[data-disabled]': mixinInput(styles.disabled) },
      },
    },
  });

  const attrInvalid = { 'data-invalid': true };
  const attrDisabled = { 'data-disabled': true };
  const attrRequired = { 'data-required': true };
  const attrValid = { 'data-valid': true };
  const attrDirty = { 'data-dirty': true };
  const attrChecked = { 'data-checked': true };

  return (
    <input
      className={[internalStyles, attributes?.className].join(' ')}
      id={attributes?.id}
      title={attributes?.title}
      tabIndex={attributes?.tabindex}
      type={attributes?.type}
      hidden={attributes?.hidden}
      value={attributes?.value}
      name={attributes?.name}
      required={isRequired}
      onChange={attributes?.onChange}
      onBlur={attributes?.onBlur}
      onFocus={attributes?.onFocus}
      onInput={attributes?.onInput}
      placeholder={attributes?.placeholder}
      disabled={isDisabled}
      defaultValue={attributes?.defaultValue}
      defaultChecked={isChecked}
      // checked={attributes?.checked}
      maxLength={attributes?.maxLength}
      {...isInvalid && attrInvalid}
      {...isRequired && attrRequired}
      {...isDisabled && attrDisabled}
      {...isValid && attrValid}
      {...isDirty && attrDirty}
      {...isChecked && attrChecked}
    />
  );

};
