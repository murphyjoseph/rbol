import { mixinStyles } from "../../shared/mixins/styles";

export const mixinContainer = (styles: any) => ({
  ...mixinStyles(styles),
  ...styles.injectCSS 
});