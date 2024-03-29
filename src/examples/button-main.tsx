import React, { FC } from 'react';
import { TButton, Button } from '..';
import { buttonMainPrimary, buttonMainSecondary } from './variants/button-main';

export interface ButtonMainProps {
  text: string
  id?: string
  onClick: () => void
  isDisabled?: boolean
  isSelected?: boolean
  variant: 'primary' | 'secondary'
}

export const ButtonMain: FC<ButtonMainProps> = ({
  text,
  onClick,
  id,
  isDisabled,
  isSelected,
  variant,
}) => {

  const traits: TButton['traits'] = {
    text,
    isDisabled,
    isSelected,
    attributes: {
      id,
      onClick
    },
    styles: variant === 'primary' ? buttonMainPrimary : buttonMainSecondary
  }

  return <Button traits={traits} />

}