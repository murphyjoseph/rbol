import { IStyles } from "../typings/styles"
import { mixinSpacing } from "./spacing";

export const mixinStyles = (
  styles: IStyles
) => ({
  ...styles?.display && { display: styles.display },
  ...styles?.margin && { ...mixinSpacing('margin', styles.margin) },
  ...styles?.textAlign && { textAlign: styles.textAlign },
  ...styles?.padding && { ...mixinSpacing('padding', styles.padding) },
  ...styles?.verticalAlign && { padding: styles.verticalAlign },
});
