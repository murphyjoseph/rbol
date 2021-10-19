import { IAttributes, IAttributesLink } from '../../shared/typings/attributes';
import { IStyles, IStylesTypography } from '../../shared/typings/styles';

export interface ILinkStyles extends IStyles, IStylesTypography {}

export type TLinkStates = 'base' | 'hover' | 'focus' | 'disabled' | 'visited'

export interface ILinkStylesWithState extends Record<TLinkStates, ILinkStyles> {}

export interface ILinkAttributes extends IAttributes, IAttributesLink {}

export interface ILink {
  styles?: Partial<ILinkStylesWithState>
  attributes?: ILinkAttributes
  text: string
  isDisabled?: boolean
}

export type TLink = {
  traits: ILink
}
