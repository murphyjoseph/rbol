import { IAttributes, IAttributesAction } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';
interface IButtonStyles extends IStyles, IStylesTypography {
}
export declare type TButtonStates = 'base' | 'hover' | 'focus' | 'disabled' | 'selected' | 'loading';
interface IButtonStylesWithState extends Record<TButtonStates, IButtonStyles> {
}
interface IButtonAttributes extends IAttributes, IAttributesAction {
}
interface IButton {
    styles?: Partial<IButtonStylesWithState>;
    attributes?: IButtonAttributes;
    text: string;
    isDisabled?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
}
export declare type TButton = {
    traits: IButton;
};
export {};
