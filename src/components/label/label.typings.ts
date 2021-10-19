import { IStatesField, TInputStates } from '../..';
import { IAttributes } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

interface ILabelStyles extends IStyles, IStylesTypography {}

interface ILabelStylesWithState extends Record<TInputStates, ILabelStyles> {}

interface ILabelAttributes extends IAttributes {
  for: string
}

export interface ILabel extends IStatesField {
  text: string
  styles?: ILabelStylesWithState
  attributes?: ILabelAttributes
}

export type TLabel = {
  traits: ILabel
}
