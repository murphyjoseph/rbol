import { IAttributes, IAttributesAction } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

export interface IButtonStyles extends IStyles, IStylesTypography {}

export type TButtonStates = 'base' | 'hover' | 'focus' | 'disabled' | 'selected' | 'loading'

export interface IButtonStylesWithState extends Record<TButtonStates, IButtonStyles> {}

export interface IButtonAttributes extends IAttributes, IAttributesAction {}

export interface IButton {
  styles?: Partial<IButtonStylesWithState>
  attributes?: IButtonAttributes
  text: string
  isDisabled?: boolean
  isSelected?: boolean
  isLoading?: boolean
}

export type TButton = {
  traits: IButton
}
