import { FC } from 'react';
import { TSizes } from '..';
export interface ContainerMainProps {
    tag: 'div' | 'section';
    background: 'black' | 'white' | 'grey';
    paddingSize: TSizes;
    id?: string;
}
export declare const ContainerMain: FC<ContainerMainProps>;
