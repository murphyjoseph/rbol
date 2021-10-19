import { IAttributes } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';
export interface ITypographyStyles extends IStyles, IStylesTypography {
}
export interface ITypographyAttributes extends IAttributes {
}
export interface ITypography {
    tag: 'span' | 'p' | 'label' | 'figcaption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    text: string;
    styles?: ITypographyStyles;
    attributes?: ITypographyAttributes;
}
export declare type TTypography = {
    traits: ITypography;
};
