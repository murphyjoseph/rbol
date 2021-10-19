import { IStatesField, TInputStates, TInputTypes } from '../..';
import { IAttributes } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';
export interface IInputStyles extends IStyles, IStylesTypography {
}
export interface IInputStylesWithState extends Record<TInputStates, IInputStyles> {
}
export interface IInputAttributes extends IAttributes {
    id: string;
    type?: TInputTypes;
    hidden?: boolean;
    value?: any;
    name: string;
    onChange?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onInput?: () => void;
    placeholder?: string;
    defaultValue?: any;
    maxLength?: number;
}
export interface IInput extends IStatesField {
    styles?: IInputStylesWithState;
    attributes?: IInputAttributes;
}
export declare type TInput = {
    traits: IInput;
};
