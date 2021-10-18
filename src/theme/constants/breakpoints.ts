// --------------------------------
// BREAKPOINTS
// --------------------------------

export enum EBreakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  mobile = 'mobile',
  desktop = 'desktop',
}

export type TBreakpoints = keyof typeof EBreakpoints;