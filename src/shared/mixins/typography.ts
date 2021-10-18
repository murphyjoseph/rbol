import { IStylesTypography } from "../typings/styles"

export const mixinTypography = (
  styles: IStylesTypography
) => ({
  ...styles?.colorBackground && { background: styles.colorBackground },
  ...styles?.colorText && { color: styles.colorText },
  ...styles?.fontFamily && { fontFamily: styles.fontFamily },
  ...styles?.fontWeight && { fontWeight: styles.fontWeight },
  ...styles?.lineHeight && { lineHeight: styles.lineHeight },
  ...styles?.textAlign && { textAlign: styles.textAlign },
  ...styles?.textDecoration && { textDecoration: styles.textDecoration },
  ...styles?.textTransform && { textTransform: styles.textTransform },
  ...styles?.whiteSpace && { whiteSpace: styles.whiteSpace },
});
