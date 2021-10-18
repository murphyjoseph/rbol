import { IStylesSpacing } from "../typings/styles";
import { Theme } from "../../theme";

const { sizes: { spacing: SPACING } } = Theme;

export const mixinSpacing = (type: 'padding' | 'margin', space: IStylesSpacing) => {
  if (space.direction === 'all') {
    return {
      [type]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'top') {
    return {
      [`${type}Top`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'topAndLeft') {
    return {
      [`${type}Top`]: `${SPACING[space.size]}${SPACING.unit}`,
      [`${type}Left`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'topAndRight') {
    return {
      [`${type}Top`]: `${SPACING[space.size]}${SPACING.unit}`,
      [`${type}Right`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'right') {
    return {
      [`${type}Right`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'bottom') {
    return {
      [`${type}Bottom`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'bottomAndLeft') {
    return {
      [`${type}Left`]: `${SPACING[space.size]}${SPACING.unit}`,
      [`${type}Bottom`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'bottomAndRight') {
    return {
      [`${type}Right`]: `${SPACING[space.size]}${SPACING.unit}`,
      [`${type}Bottom`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'left') {
    return {
      [`${type}Left`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  } else if (space.direction === 'vertical') {
    return {
      [`${type}Top`]: `${SPACING[space.size]}${SPACING.unit}`,
      [`${type}Bottom`]: `${SPACING[space.size]}${SPACING.unit}`
    }
  }
}
