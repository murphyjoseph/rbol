import React, { FC } from 'react';
import { TButton, Button } from '..';

export interface ButtonPrimaryProps {
  text: string;
  id?: string;
  onClick: () => void;
}

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  text,
  onClick,
  id,
}) => {

  const traits: TButton['traits'] = {
    text,
    attributes: {
      id,
      onClick
    },
    styles: {
      base: {
        colorText: 'white',
        colorBackground: 'black',
        textDecoration: 'underline',
        padding: { direction: 'all', size: 'two' }
      },
      hover: {
        colorBackground: 'grey',
        textDecoration: 'none'
      }
    }
  }

  return <Button traits={traits} />

}