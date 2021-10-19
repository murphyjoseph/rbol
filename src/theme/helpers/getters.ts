import { Theme, TSizes, TSizesTypes } from '..';

export const getTokenSize = (type: TSizesTypes, size: TSizes) => (`
  ${Theme.sizes[type][size]}${Theme.sizes[type].unit}
`);
