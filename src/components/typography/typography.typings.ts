import * as CSS from 'csstype';
import { IAttributes } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

interface ITypographyStyles extends IStyles, IStylesTypography {}

interface ITypographyAttributes extends IAttributes {}

export interface ITypography {
  tag: 'span' | 'p' | 'label' | 'figcaption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  styles?: ITypographyStyles;
  attributes?: ITypographyAttributes;
}

export type TTypography = {
  traits: ITypography;
}
