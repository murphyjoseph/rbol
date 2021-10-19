import React, { FC } from 'react';
import { style } from 'typestyle';
import { Input, Label } from '..';
import { mixinFieldInput } from './field-input.mixin';
import { TFieldInput } from './field-input.typings';

export const FieldInput: FC<TFieldInput> = ({ traits }) => {

  const {
    traitInput,
    traitLabel,
    styles,
    isInvalid,
    isRequired,
    isDisabled,
    isChecked,
    isValid,
    isDirty,
  } = traits;

  const traitsForInput = {
    ...traitInput,
    type: 'text',
    isInvalid,
    isRequired,
    isDisabled,
    isChecked,
    isValid,
    isDirty,
  }

  const traitsForLabel = {
    ...traitLabel,
    isInvalid,
    isRequired,
    isDisabled,
    isChecked,
    isValid,
    isDirty,
  }

  const internalStyles = style({
    ...styles && mixinFieldInput(styles),
  });

  return (
    <div className={internalStyles}>
      <Input traits={traitsForInput} />
      <Label traits={traitsForLabel} />
    </div>
  );

};
