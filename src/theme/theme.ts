import { tokenSizeContainer, tokenSizeFont, tokenSizeSpacing } from '.';
import { tokenBreakpoints } from './tokens/breakpoints';

export const Theme = {
  breakpoints: tokenBreakpoints,
  sizes: {
    spacing: tokenSizeSpacing,
    typography: tokenSizeFont,
    container: tokenSizeContainer,
  },
};
