import * as CSS from 'csstype';
import { IAttributes } from '../../shared/typings/attributes';
import { IStyles } from "../../shared/typings/styles";

interface ITypographyStyles extends IStyles {
  colorText?: string;
  colorBackground?: string;
  fontStyle?: CSS.Property.FontStyle;
  textTransform?: CSS.Property.TextTransform;
  textAlign?: CSS.Property.TextAlign;
  whiteSpace?: CSS.Property.WhiteSpace;
}

interface ITypographyAttributes extends IAttributes {}

interface ITypography {
  tag: 'span' | 'p' | 'label' | 'figcaption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  styles?: ITypographyStyles;
  attributes?: ITypographyAttributes;
}

export type TTypography = {
  traits: ITypography;
}

