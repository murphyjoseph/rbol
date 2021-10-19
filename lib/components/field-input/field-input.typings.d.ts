import { IInputAttributes, IInputStylesWithState, ILabelAttributes, ILabelStylesWithState } from '..';
import { IStatesField, IStyles } from '../..';
export interface IFieldInputStyles extends IStyles {
}
export interface IFieldInputLabel {
    text: string;
    attributes?: ILabelAttributes;
    styles?: ILabelStylesWithState;
}
export interface IFieldInputInput {
    attributes?: Omit<IInputAttributes, 'type'>;
    styles?: IInputStylesWithState;
}
export interface IFieldInput extends IStatesField {
    styles?: IFieldInputStyles;
    traitLabel: IFieldInputLabel;
    traitInput: IFieldInputInput;
}
export declare type TFieldInput = {
    traits: IFieldInput;
};
