import { mixinStyles } from '../../shared/mixins/styles';
import { mixinTypography } from '../../shared/mixins/typography';

export const mixinInput = (stateStyles: any) => ({
  ...mixinStyles(stateStyles),
  ...mixinTypography(stateStyles),
  ...stateStyles.injectCSS,
});
