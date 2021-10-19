import { IButtonStylesWithState } from "../../components/button/button.typings";

export const buttonMainPrimary: Partial<IButtonStylesWithState> = {
  base: {
    colorText: 'white',
    colorBackground: 'black',
    textDecoration: 'underline',
    padding: { direction: 'all', size: 'two' },
  },
  hover: {
    colorBackground: 'darkgrey',
    textDecoration: 'none',
  },
  selected: {
    colorBackground: 'darkgrey',
    textDecoration: 'none',
  },
  disabled: {
    colorBackground: 'white',
    colorText: 'black',
  },
};

export const buttonMainSecondary: Partial<IButtonStylesWithState> = {
  base: {
    colorText: 'white',
    colorBackground: 'blue',
    textDecoration: 'underline',
    padding: { direction: 'all', size: 'two' },
  },
  hover: {
    colorBackground: 'darkblue',
    textDecoration: 'none',
  },
  selected: {
    colorBackground: 'darkblue',
    textDecoration: 'none',
  },
  disabled: {
    colorBackground: 'darkgrey',
    colorText: 'lightgrey',
  },
};
