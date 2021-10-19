// --------------------------------
// DIRECTION - SPACING
// --------------------------------

export enum EDirectionSpacing {
  all = 'all',
  top = 'top',
  topAndLeft = 'topLeft',
  topAndRight = 'topRight',
  right = 'right',
  bottom = 'bottom',
  bottomAndLeft = 'bottomAndLeft',
  bottomAndRight = 'bottomAndRight',
  left = 'left',
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export type TDirectionSpacing = keyof typeof EDirectionSpacing;
