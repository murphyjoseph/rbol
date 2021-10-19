import { IAttributes, IAttributesLink } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

interface ILinkStyles extends IStyles, IStylesTypography {}

export type TLinkStates = 'base' | 'hover' | 'focus' | 'disabled' | 'visited';

interface ILinkStylesWithState extends Record<TLinkStates, ILinkStyles> {}

interface ILinkAttributes extends IAttributes, IAttributesLink {}

interface ILink {
  styles?: Partial<ILinkStylesWithState>;
  attributes?: ILinkAttributes;
  text: string;
  isDisabled?: boolean;
}

export type TLink = {
  traits: ILink;
}
