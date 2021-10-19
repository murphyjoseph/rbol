import { IAttributes } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

interface ILabelStyles extends IStyles, IStylesTypography {}

interface ILabelAttributes extends IAttributes {
  for: string;
}

export interface ILabel {
  text: string;
  styles?: ILabelStyles;
  attributes?: ILabelAttributes;
}

export type TLabel = {
  traits: ILabel;
}
