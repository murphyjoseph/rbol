import { IAttributes } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

interface IInputStyles extends IStyles, IStylesTypography {}

export type TInputStates = 'base' | 'hover' | 'focus' | 'disabled' | 'checked' | 'invalid' | 'valid' | 'dirty'

interface IInputStylesWithState extends Record<TInputStates, IInputStyles> {}

interface IInputAttributes extends IAttributes {
  id: string
  type: 'radio' | 'checkbox' | 'text'
  hidden: boolean
  value: any
  name: string
  onChange: () => void
  onBlur: () => void
  onFocus: () => void
  onInput: () => void
  placeholder: string
  defaultValue: any
  maxLength: number
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
