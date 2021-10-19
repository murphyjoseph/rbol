import { mixinStyles } from '../../shared/mixins/styles';

export const mixinFieldInput = (styles: any) => ({
  ...mixinStyles(styles),
  ...{ colorBackground: styles.background },
  ...styles.injectCSS,
});
