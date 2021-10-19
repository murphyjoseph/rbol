import { FC } from 'react';
export interface HeadingProps {
    text: string;
    tag: 'h1' | 'h2' | 'h3';
    color: 'black' | 'white';
    background: 'black' | 'white';
    id?: string;
}
export declare const Heading: FC<HeadingProps>;
