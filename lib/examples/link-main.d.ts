import { FC } from 'react';
export interface LinkMainProps {
    text: string;
    id?: string;
    href: string;
    isDisabled?: boolean;
    target: '_blank' | '_self';
    variant: 'primary' | 'secondary';
}
export declare const LinkMain: FC<LinkMainProps>;
