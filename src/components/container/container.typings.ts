import { IAttributes } from '../../shared/typings/attributes';
import { IStyles } from '../../shared/typings/styles';

interface IContainerStyles extends IStyles {
  colorBackground: string
}

interface IContainerAttributes extends IAttributes {}

export interface IContainer {
  tag: 'section' | 'div'
  styles?: IContainerStyles
  attributes?: IContainerAttributes
}

export type TContainer = {
  traits: IContainer
}
