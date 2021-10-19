import { mixinStyles } from "../../shared/mixins/styles";

export const mixinContainer = (styles: any) => ({
  ...mixinStyles(styles),
  ...{ colorBackground: styles.background },
  ...styles.injectCSS 
});