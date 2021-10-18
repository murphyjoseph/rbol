// --------------------------------
// SIZES
// --------------------------------

export enum ESizes {
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  six = 'six',
  seven = 'seven',
  eight = 'eight',
  nine = 'nine',
  ten = 'ten',
  eleven = 'eleven',
  twelve = 'twelve',
}

export type TSizes = keyof typeof ESizes;

export enum ESizesTypes {
  spacing = 'spacing',
  typography = 'typography'
}

export type TSizesTypes = keyof typeof ESizesTypes;