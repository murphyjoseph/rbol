import { FC } from 'react';
export interface LinkPrimaryProps {
    text: string;
    id?: string;
    href: string;
    target: '_blank';
}
export declare const LinkPrimary: FC<LinkPrimaryProps>;
