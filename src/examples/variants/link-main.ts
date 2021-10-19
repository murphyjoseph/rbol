import { ILinkStylesWithState } from "../../components/link/link.typings";

export const linkMainPrimary: Partial<ILinkStylesWithState> = {
  base: {
    colorText: 'green',
    textDecoration: 'underline',
  },
  hover: {
    colorText: 'darkgreen',
    textDecoration: 'none',
  },
  disabled: {
    colorText: 'grey',
    textDecoration: 'underline',
  },
};

export const linkMainSecondary: Partial<ILinkStylesWithState> = {
  base: {
    colorText: 'blue',
    textDecoration: 'underline',
  },
  hover: {
    colorText: 'darkblue',
    textDecoration: 'none',
  },
  disabled: {
    colorText: 'grey',
    textDecoration: 'underline',
  },
};
