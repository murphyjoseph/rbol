import { IButtonStylesWithState } from "../../components/button/button.typings";

export const buttonMainPrimary: Partial<IButtonStylesWithState> = {
  base: {
    colorText: 'white',
    colorBackground: 'black',
    textDecoration: 'underline',
    padding: { direction: 'all', size: 'two' }
  },
  hover: {
    colorBackground: 'grey',
    textDecoration: 'none'
  },
  disabled: {
    colorBackground: 'darkgrey',
    colorText: 'lightgrey'
  },
};

export const buttonMainSecondary: Partial<IButtonStylesWithState> = {
  base: {
    colorText: 'white',
    colorBackground: 'blue',
    textDecoration: 'underline',
    padding: { direction: 'all', size: 'two' }
  },
  hover: {
    colorBackground: 'crimson',
    textDecoration: 'none'
  },
  disabled: {
    colorBackground: 'darkgrey',
    colorText: 'lightgrey'
  },
};
