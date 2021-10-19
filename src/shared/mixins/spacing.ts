import { IStylesSpacing } from '../typings/styles';
import { getTokenSize } from '../../theme';

export const mixinSpacing = (type: 'padding' | 'margin', space: IStylesSpacing) => {
  if (space.direction === 'all') {
    return {
      [type]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'top') {
    return {
      [`${type}Top`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'topAndLeft') {
    return {
      [`${type}Top`]: getTokenSize('spacing', space.size),
      [`${type}Left`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'topAndRight') {
    return {
      [`${type}Top`]: getTokenSize('spacing', space.size),
      [`${type}Right`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'right') {
    return {
      [`${type}Right`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'bottom') {
    return {
      [`${type}Bottom`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'bottomAndLeft') {
    return {
      [`${type}Left`]: getTokenSize('spacing', space.size),
      [`${type}Bottom`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'bottomAndRight') {
    return {
      [`${type}Right`]: getTokenSize('spacing', space.size),
      [`${type}Bottom`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'left') {
    return {
      [`${type}Left`]: getTokenSize('spacing', space.size),
    };
  } else if (space.direction === 'vertical') {
    return {
      [`${type}Top`]: getTokenSize('spacing', space.size),
      [`${type}Bottom`]: getTokenSize('spacing', space.size),
    };
  }
};
