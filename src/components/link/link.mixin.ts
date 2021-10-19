import { mixinStyles } from '../../shared/mixins/styles';
import { mixinTypography } from '../../shared/mixins/typography';

export const mixinLink = (stateStyles: any) => ({
  ...mixinStyles(stateStyles),
  ...mixinTypography(stateStyles),
  ...stateStyles.injectCSS,
});
