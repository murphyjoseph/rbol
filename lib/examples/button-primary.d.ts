import { FC } from 'react';
export interface ButtonPrimaryProps {
    text: string;
    id?: string;
    onClick: () => void;
}
export declare const ButtonPrimary: FC<ButtonPrimaryProps>;
