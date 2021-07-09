// --------------------------------
// DIRECTION - SPACING
// --------------------------------

export enum EDirectionSpacing {
  all = 'all',
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export type TDirectionSpacing = keyof typeof EDirectionSpacing;