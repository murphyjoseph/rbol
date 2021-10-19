import { TInputStates, TInputTypes } from '../..';
import { IAttributes } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

interface IInputStyles extends IStyles, IStylesTypography {}

interface IInputStylesWithState extends Record<TInputStates, IInputStyles> {}

interface IInputAttributes extends IAttributes {
  id: string
  type?: TInputTypes
  hidden?: boolean
  value?: any
  name: string
  onChange?: () => void
  onBlur?: () => void
  onFocus?: () => void
  onInput?: () => void
  placeholder?: string
  defaultValue?: any
  maxLength?: number
}

export interface IInput {
  styles?: IInputStylesWithState
  attributes?: IInputAttributes
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  isChecked?: boolean
  isDirty?: boolean
  isValid?: boolean
}

export type TInput = {
  traits: IInput
}
