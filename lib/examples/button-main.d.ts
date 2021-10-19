import { FC } from 'react';
export interface ButtonMainProps {
    text: string;
    id?: string;
    onClick: () => void;
    isDisabled?: boolean;
    isSelected?: boolean;
    variant: 'primary' | 'secondary';
}
export declare const ButtonMain: FC<ButtonMainProps>;
